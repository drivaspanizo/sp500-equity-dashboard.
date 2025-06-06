# Equity Value Intelligence: S&P 500 Tracker

A comprehensive, interactive dashboard for analyzing S&P 500 companies using Value vs Growth classification and fundamental valuation metrics based on the Fama-French three-factor model.

![Dashboard Preview](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)
![Build Status](https://img.shields.io/badge/Build-Passing-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Live Demo

View the live dashboard: [S&P 500 Equity Intelligence Dashboard](https://yourusername.github.io/sp500-equity-intelligence)

## 📊 Features

### Core Dashboard Components

1. **Overview Panel**
   - Value vs Growth stock distribution
   - Interactive sector allocation pie charts
   - Market cap-weighted average ratios (P/E, P/B, EV/EBIT)

2. **Value Assessment Table** 
   - Comprehensive financial metrics for Value stocks
   - Color-coded heatmap visualization
   - DCF value gap analysis
   - Sortable columns with advanced filtering

3. **Interactive Comparative Analysis**
   - Multi-company selection (2-5 stocks)
   - Dynamic chart types: Valuation, Profitability, Safety, Growth
   - Radar charts and bar chart visualizations

4. **Historical Valuation Trends**
   - Time series analysis vs 5-year averages
   - Stock price vs fair value range (DCF bands)
   - Interactive trend line charts

5. **Advanced Filters & Controls**
   - Sector and industry filtering
   - Valuation status classification
   - Interactive dividend yield slider
   - Time period toggles (TTM, FY1, FY2)

6. **Export & Alert System**
   - CSV, Excel, and PDF export capabilities
   - "Top 10 Undervalued Value Stocks" leaderboard
   - Dynamic alert thresholds
   - Real-time monitoring indicators

## 🏗️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for interactive visualizations
- **Data Processing**: Python with yfinance, pandas, numpy
- **APIs**: Yahoo Finance, Alpha Vantage (optional)
- **Deployment**: GitHub Pages

## 🛠️ Installation & Setup

### Method 1: GitHub Pages Deployment (Recommended)

1. **Fork this repository**
   ```bash
   # Clone your fork
   git clone https://github.com/yourusername/sp500-equity-intelligence.git
   cd sp500-equity-intelligence
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

3. **Access your dashboard**
   - Your dashboard will be available at: `https://yourusername.github.io/sp500-equity-intelligence`

### Method 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sp500-equity-intelligence.git
   cd sp500-equity-intelligence
   ```

2. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`

## 📈 Data Management

### Live Data Updates

The dashboard includes a Python script to fetch live S&P 500 data:

```bash
# Install dependencies
pip install yfinance pandas numpy requests

# Run data fetcher
python sp500_data_fetcher.py
```

This generates:
- `sp500_dashboard_data.json` - Complete dataset
- `dashboard_data.js` - JavaScript format for web integration

### Data Sources

- **Stock Prices**: Yahoo Finance API
- **Financial Statements**: SEC EDGAR filings
- **S&P 500 Constituents**: Wikipedia (updated automatically)
- **Sector Classifications**: GICS (Global Industry Classification Standard)

## 📊 Classification Methodology

### Fama-French Three-Factor Model

**Value Stock Criteria** (bottom 30% in):
- Price-to-Earnings (P/E) ratio
- Price-to-Book (P/B) ratio  
- Enterprise Value-to-EBIT (EV/EBIT) ratio

**Growth Stock Criteria** (top 30% in):
- Earnings Per Share (EPS) growth rate
- Revenue Compound Annual Growth Rate (CAGR)
- Price-to-Sales (P/S) ratio

### Dynamic Valuation Tags

**Value Stocks**:
- `VALUE - Undervalued`: DCF gap > 10%
- `VALUE - Fairly Valued`: DCF gap -10% to 10%
- `VALUE - Overvalued`: DCF gap < -10%

**Growth Stocks**:
- `GROWTH - Momentum`: EPS CAGR > 15%
- `GROWTH - Watchlist`: EPS CAGR 10-15%

## 🔧 Key Financial Metrics

### Valuation Ratios
- **P/E Ratio**: Price per share ÷ Earnings per share
- **P/B Ratio**: Market price per share ÷ Book value per share
- **EV/EBIT**: Enterprise Value ÷ Earnings before Interest and Taxes

### Profitability Metrics
- **ROIC**: Net Operating Profit After Tax ÷ Invested Capital
- **ROE**: Net Income ÷ Shareholders' Equity
- **Operating Margin**: Operating Income ÷ Revenue

### DCF Valuation
```
DCF Value = Σ [FCF_t ÷ (1 + WACC)^t] + Terminal Value
DCF Gap (%) = (Fair Value - Current Price) ÷ Current Price × 100
```

### Free Cash Flow Yield
```
FCF Yield = Free Cash Flow ÷ Market Capitalization × 100
```

## 🎨 Customization

### Updating Data
1. Modify `sp500_data_fetcher.py` for different data sources
2. Adjust classification thresholds in `app.js`
3. Update sector mappings and filters

### Styling
- Edit `style.css` for visual customizations
- Modify chart colors and themes in `app.js`
- Update responsive breakpoints

### Adding Features
- Extend the JavaScript modules in `app.js`
- Add new chart types using Chart.js
- Implement additional financial metrics

## 📱 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🚨 Important Notes

### Data Limitations
- Sample data included for demonstration
- Live data requires API keys for production use
- Rate limits apply to free tier APIs

### Investment Disclaimer
This dashboard is for educational and research purposes only. It does not constitute investment advice. Always consult with qualified financial professionals before making investment decisions.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Eugene Fama & Kenneth French** - Three-factor model methodology
- **Yahoo Finance** - Financial data API
- **Chart.js** - Interactive charting library
- **S&P Dow Jones Indices** - Index methodology and classifications

## 📞 Support

For questions and support:
- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/sp500-equity-intelligence/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/sp500-equity-intelligence/wiki)

## 🔄 Version History

- **v1.0.0** - Initial release with core dashboard functionality
- **v1.1.0** - Added export capabilities and alert system
- **v1.2.0** - Enhanced mobile responsiveness and performance

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ for the investment community