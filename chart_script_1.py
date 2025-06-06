import plotly.graph_objects as go
import pandas as pd

# Data from the provided JSON
features = ["Value vs Growth Classification", "DCF Valuation Analysis", "Fama-French Methodology", 
           "Real-time Data Integration", "Historical Trend Analysis", "Interactive Sector Filtering", 
           "Comparative Company Analysis", "Export & Alert System", "Color-coded Risk Assessment", 
           "Mobile-responsive Design"]
scores = [95, 90, 92, 88, 87, 85, 83, 80, 78, 75]

# Create DataFrame and sort by scores (descending)
df = pd.DataFrame({'features': features, 'scores': scores})
df = df.sort_values('scores', ascending=True)  # ascending=True for horizontal bar chart

# Abbreviate feature names to fit 15 character limit
feature_abbreviations = {
    "Value vs Growth Classification": "Value vs Growth",
    "DCF Valuation Analysis": "DCF Valuation", 
    "Interactive Sector Filtering": "Sector Filter",
    "Real-time Data Integration": "Real-time Data",
    "Export & Alert System": "Export & Alert",
    "Historical Trend Analysis": "Hist Trends",
    "Comparative Company Analysis": "Company Comp",
    "Fama-French Methodology": "Fama-French",
    "Color-coded Risk Assessment": "Risk Assess",
    "Mobile-responsive Design": "Mobile Design"
}

df['abbreviated'] = df['features'].map(feature_abbreviations)

# Use professional blue/green colors from the brand palette
colors = ['#1FB8CD', '#5D878F', '#ECEBD5', '#13343B'] * 3  # Repeat to cover all bars

fig = go.Figure()

fig.add_trace(go.Bar(
    x=df['scores'],
    y=df['abbreviated'],
    orientation='h',
    marker_color=colors[:len(df)],
    text=df['scores'],
    textposition='outside',
    cliponaxis=False
))

fig.update_layout(
    title="S&P 500 Dashboard Features",
    xaxis_title="Value Score",
    yaxis_title="Features"
)

fig.update_xaxes(range=[0, 100])

# Save the chart
fig.write_image("sp500_dashboard_features.png")
fig.show()