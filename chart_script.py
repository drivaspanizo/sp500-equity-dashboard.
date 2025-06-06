import plotly.graph_objects as go
import numpy as np

# Create a clean flowchart with rectangles and better spacing
fig = go.Figure()

# Define positions with better spacing
positions = {
    # Data Sources (top row)
    "yahoo": {"x": 100, "y": 400, "width": 80, "height": 30},
    "edgar": {"x": 200, "y": 400, "width": 80, "height": 30},
    "sp500": {"x": 300, "y": 400, "width": 80, "height": 30},
    "alpha": {"x": 400, "y": 400, "width": 80, "height": 30},
    
    # Processing Layer (middle row)
    "fetcher": {"x": 150, "y": 300, "width": 90, "height": 30},
    "dcf": {"x": 275, "y": 300, "width": 80, "height": 30},
    "fama": {"x": 375, "y": 300, "width": 80, "height": 30},
    
    # Dashboard Components (lower row)
    "overview": {"x": 75, "y": 200, "width": 70, "height": 30},
    "value": {"x": 175, "y": 200, "width": 70, "height": 30},
    "compare": {"x": 275, "y": 200, "width": 70, "height": 30},
    "history": {"x": 375, "y": 200, "width": 70, "height": 30},
    
    # User Actions (bottom row)
    "filters": {"x": 150, "y": 100, "width": 80, "height": 30},
    "export": {"x": 300, "y": 100, "width": 80, "height": 30}
}

# Define colors for different types
colors = {
    "data_source": "#1FB8CD",  # Strong cyan
    "processing": "#FFC185",   # Light orange
    "dashboard": "#ECEBD5",    # Light green
    "user_action": "#5D878F"   # Cyan
}

# Function to add a rectangle node
def add_rectangle(fig, key, label, color, positions):
    pos = positions[key]
    # Add rectangle
    fig.add_shape(
        type="rect",
        x0=pos["x"] - pos["width"]/2,
        y0=pos["y"] - pos["height"]/2,
        x1=pos["x"] + pos["width"]/2,
        y1=pos["y"] + pos["height"]/2,
        fillcolor=color,
        line=dict(color="white", width=2)
    )
    
    # Add text label
    fig.add_annotation(
        x=pos["x"],
        y=pos["y"],
        text=label,
        showarrow=False,
        font=dict(size=10, color="black"),
        xanchor="center",
        yanchor="middle"
    )

# Add all nodes
# Data Sources
add_rectangle(fig, "yahoo", "Yahoo Finance", colors["data_source"], positions)
add_rectangle(fig, "edgar", "SEC EDGAR", colors["data_source"], positions)
add_rectangle(fig, "sp500", "S&P 500 List", colors["data_source"], positions)
add_rectangle(fig, "alpha", "Alpha Vantage", colors["data_source"], positions)

# Processing Layer
add_rectangle(fig, "fetcher", "Data Fetcher", colors["processing"], positions)
add_rectangle(fig, "dcf", "DCF Calc", colors["processing"], positions)
add_rectangle(fig, "fama", "Fama-French", colors["processing"], positions)

# Dashboard Components
add_rectangle(fig, "overview", "Overview", colors["dashboard"], positions)
add_rectangle(fig, "value", "Value Table", colors["dashboard"], positions)
add_rectangle(fig, "compare", "Comparison", colors["dashboard"], positions)
add_rectangle(fig, "history", "Hist Trends", colors["dashboard"], positions)

# User Actions
add_rectangle(fig, "filters", "Filters", colors["user_action"], positions)
add_rectangle(fig, "export", "Export/Alerts", colors["user_action"], positions)

# Function to add arrow between nodes
def add_arrow(fig, from_key, to_key, positions, color="#666", offset_x=0, offset_y=0):
    from_pos = positions[from_key]
    to_pos = positions[to_key]
    
    # Calculate arrow start and end points
    start_x = from_pos["x"] + offset_x
    start_y = from_pos["y"] - from_pos["height"]/2
    end_x = to_pos["x"] + offset_x
    end_y = to_pos["y"] + to_pos["height"]/2
    
    fig.add_annotation(
        x=end_x,
        y=end_y,
        ax=start_x,
        ay=start_y,
        arrowhead=2,
        arrowsize=1.5,
        arrowwidth=2,
        arrowcolor=color,
        showarrow=True,
        text=""
    )

# Add data flow arrows
# Data Sources to Data Fetcher (with offsets to avoid overlap)
add_arrow(fig, "yahoo", "fetcher", positions, "#666", -20, 0)
add_arrow(fig, "edgar", "fetcher", positions, "#666", -10, 0)
add_arrow(fig, "sp500", "fetcher", positions, "#666", 10, 0)
add_arrow(fig, "alpha", "fetcher", positions, "#666", 20, 0)

# Data Fetcher to Processing
add_arrow(fig, "fetcher", "dcf", positions, "#666")
add_arrow(fig, "fetcher", "fama", positions, "#666")

# Processing to Dashboard
add_arrow(fig, "dcf", "overview", positions, "#666", -20, 0)
add_arrow(fig, "dcf", "value", positions, "#666")
add_arrow(fig, "fama", "value", positions, "#666", 10, 0)
add_arrow(fig, "fama", "compare", positions, "#666", -10, 0)

# Data Fetcher direct to some dashboard components
add_arrow(fig, "fetcher", "history", positions, "#666", 50, 0)

# User interactions (different color for control flow)
add_arrow(fig, "filters", "overview", positions, colors["user_action"], -20, 0)
add_arrow(fig, "filters", "value", positions, colors["user_action"], 10, 0)
add_arrow(fig, "filters", "compare", positions, colors["user_action"], 40, 0)

# Export connections
add_arrow(fig, "value", "export", positions, "#666", 30, 0)
add_arrow(fig, "compare", "export", positions, "#666", 0, 0)

# Add layer labels
fig.add_annotation(x=20, y=400, text="Data Sources", showarrow=False, 
                  font=dict(size=14, color=colors["data_source"]), 
                  xanchor="left", yanchor="middle")

fig.add_annotation(x=20, y=300, text="Processing", showarrow=False,
                  font=dict(size=14, color=colors["processing"]), 
                  xanchor="left", yanchor="middle")

fig.add_annotation(x=20, y=200, text="Dashboard", showarrow=False,
                  font=dict(size=14, color=colors["dashboard"]), 
                  xanchor="left", yanchor="middle")

fig.add_annotation(x=20, y=100, text="User Actions", showarrow=False,
                  font=dict(size=14, color=colors["user_action"]), 
                  xanchor="left", yanchor="middle")

# Add layer background zones
fig.add_shape(type="rect", x0=50, y0=380, x1=450, y1=420,
              fillcolor="rgba(31, 184, 205, 0.1)", line=dict(width=0))

fig.add_shape(type="rect", x0=50, y0=280, x1=450, y1=320,
              fillcolor="rgba(255, 193, 133, 0.1)", line=dict(width=0))

fig.add_shape(type="rect", x0=50, y0=180, x1=450, y1=220,
              fillcolor="rgba(236, 235, 213, 0.1)", line=dict(width=0))

fig.add_shape(type="rect", x0=50, y0=80, x1=450, y1=120,
              fillcolor="rgba(93, 135, 143, 0.1)", line=dict(width=0))

# Update layout
fig.update_layout(
    title="S&P 500 Dashboard Architecture",
    xaxis=dict(
        showgrid=False,
        zeroline=False,
        showticklabels=False,
        range=[0, 500]
    ),
    yaxis=dict(
        showgrid=False,
        zeroline=False,
        showticklabels=False,
        range=[50, 450]
    ),
    plot_bgcolor='white',
    showlegend=False
)

# Save the figure
fig.write_image("sp500_dashboard_architecture.png")
fig