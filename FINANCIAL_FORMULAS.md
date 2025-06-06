# 📊 Financial Metrics & Calculations Reference

Complete guide to all financial formulas, ratios, and methodologies used in the S&P 500 Equity Intelligence Dashboard.

## 🏷️ Classification Methodologies

### Fama-French Three-Factor Model

The dashboard uses the academically validated Fama-French model for stock classification:

**Mathematical Expression:**
```
R(i,t) - RF(t) = α(i) + β(i)[RM(t) - RF(t)] + s(i)SMB(t) + h(i)HML(t) + ε(i,t)
```

Where:
- `R(i,t)` = Return on security i for period t
- `RF(t)` = Risk-free rate for period t  
- `RM(t)` = Return on market portfolio for period t
- `SMB(t)` = Small Minus Big (size factor)
- `HML(t)` = High Minus Low (value factor)

### Value Stock Classification

A stock qualifies as **Value** if it ranks in the bottom 30% for at least 2 of these metrics:

#### Price-to-Earnings Ratio (P/E)
```
P/E Ratio = Market Price per Share ÷ Earnings per Share (EPS)
```
- **Threshold**: < 15.0
- **Interpretation**: Lower P/E suggests undervalued stock

#### Price-to-Book Ratio (P/B)
```
P/B Ratio = Market Price per Share ÷ Book Value per Share

Book Value per Share = (Total Assets - Total Liabilities) ÷ Outstanding Shares
```
- **Threshold**: < 2.0
- **Interpretation**: P/B < 1.0 indicates trading below book value

#### Enterprise Value-to-EBIT Ratio (EV/EBIT)
```
EV/EBIT = Enterprise Value ÷ Earnings Before Interest and Taxes

Enterprise Value = Market Cap + Total Debt - Cash and Cash Equivalents
```
- **Threshold**: < 10.0
- **Interpretation**: Lower ratio indicates better operational value

### Growth Stock Classification

A stock qualifies as **Growth** if it ranks in the top 30% for at least 1 of these metrics:

#### Earnings Per Share Growth (EPS CAGR)
```
EPS CAGR = [(EPS_end ÷ EPS_start)^(1/years)] - 1
```
- **Threshold**: > 10.0%
- **Interpretation**: Higher growth indicates expanding profitability

#### Revenue Growth (Sales CAGR)  
```
Sales CAGR = [(Revenue_end ÷ Revenue_start)^(1/years)] - 1
```
- **Threshold**: > 8.0%
- **Interpretation**: Consistent revenue growth signals market expansion

## 💰 Valuation Metrics

### Discounted Cash Flow (DCF) Analysis

The core valuation methodology used for fair value estimation:

#### Free Cash Flow Calculation
```
Free Cash Flow = Operating Cash Flow - Capital Expenditures
```

#### DCF Fair Value Formula
```
DCF Value = Σ[FCF_t ÷ (1 + WACC)^t] + Terminal Value

Terminal Value = FCF_final × (1 + g) ÷ (WACC - g)
```

Where:
- `FCF_t` = Free Cash Flow in year t
- `WACC` = Weighted Average Cost of Capital (10% default)
- `g` = Perpetual growth rate (5% default)

#### DCF Value Gap
```
DCF Gap (%) = (Fair Value - Current Price) ÷ Current Price × 100
```

**Classification:**
- **Undervalued**: DCF Gap > 10%
- **Fairly Valued**: DCF Gap -10% to 10%  
- **Overvalued**: DCF Gap < -10%

### Free Cash Flow Yield
```
FCF Yield (%) = Free Cash Flow ÷ Market Capitalization × 100
```
- **Interpretation**: Higher yield indicates better cash generation relative to valuation
- **Benchmark**: > 5% considered attractive

## 📈 Profitability Metrics

### Return on Invested Capital (ROIC)
```
ROIC = NOPAT ÷ Invested Capital

NOPAT = EBIT × (1 - Tax Rate)

Invested Capital = Total Assets - Non-Interest Bearing Liabilities
```
- **Benchmark**: > 15% indicates excellent capital efficiency
- **ROIC > WACC** = Value creation

### Return on Equity (ROE)
```
ROE = Net Income ÷ Shareholders' Equity × 100
```
- **Benchmark**: > 15% considered strong
- **DuPont Formula**: ROE = Net Margin × Asset Turnover × Equity Multiplier

### Operating Margin
```
Operating Margin (%) = Operating Income ÷ Revenue × 100
```
- **Interpretation**: Measures operational efficiency
- **Sector Comparison**: Varies significantly by industry

## 🛡️ Financial Health Metrics

### Debt-to-Equity Ratio
```
Debt-to-Equity = Total Debt ÷ Total Shareholders' Equity
```
- **Interpretation**: Lower ratios indicate conservative capital structure
- **Benchmark**: < 0.5 considered low leverage

### Interest Coverage Ratio
```
Interest Coverage = EBIT ÷ Interest Expense
```
- **Interpretation**: Ability to service debt obligations
- **Benchmark**: > 5.0 indicates strong coverage

## 📊 Dynamic Valuation Tags

### Value Stock Tags

**VALUE - Undervalued**
```
Criteria: DCF Gap > 10% AND (P/E < 15 OR P/B < 1.5)
```

**VALUE - Fairly Valued**  
```
Criteria: -10% ≤ DCF Gap ≤ 10% AND Value classification
```

**VALUE - Overvalued**
```
Criteria: DCF Gap < -10% AND Value classification
```

### Growth Stock Tags

**GROWTH - Momentum**
```
Criteria: EPS CAGR > 15% AND Sales CAGR > 10%
```

**GROWTH - Watchlist**
```
Criteria: Growth classification BUT momentum criteria not met
```

## 🔢 Market Cap Weighting

For sector averages and index calculations:

```
Weight_i = Market Cap_i ÷ Σ(Market Cap_all)

Weighted Average = Σ(Metric_i × Weight_i)
```

## 🎯 Alert Thresholds

### Default Alert Levels

**P/E Ratio Alerts:**
- **Low**: P/E < 10 (potential value opportunity)
- **High**: P/E > 30 (potential overvaluation)

**DCF Gap Alerts:**
- **Undervalued**: Gap > 20% (strong buy signal)
- **Overvalued**: Gap < -20% (potential sell signal)

**Dividend Yield Alerts:**
- **High Yield**: > 4% (income opportunity)
- **Dividend Cut Risk**: Payout ratio > 80%

## 📋 Data Quality Metrics

### Reliability Scores

Each metric includes confidence intervals based on:

1. **Data Freshness**: Last updated timestamp
2. **Source Reliability**: API vs estimated data
3. **Historical Consistency**: Variance from long-term averages

### Error Handling

**Missing Data Defaults:**
- P/E Ratio: Use Forward P/E if TTM unavailable
- Growth Rates: 3-year average if 5-year unavailable  
- DCF Inputs: Industry medians for missing values

## 🧮 Calculation Examples

### Example: Apple Inc. (AAPL) Analysis

**Given Data:**
- Market Price: $175.43
- EPS (TTM): $6.16
- Book Value per Share: $3.88
- Free Cash Flow: $108.9B
- Market Cap: $3.36T

**Calculations:**
```
P/E Ratio = $175.43 ÷ $6.16 = 28.5

P/B Ratio = $175.43 ÷ $3.88 = 45.2

FCF Yield = $108.9B ÷ $3.36T × 100 = 3.24%

DCF Fair Value = $108.9B × 1.05 ÷ (0.10 - 0.05) ÷ 19.3B shares = $118.37

DCF Gap = ($118.37 - $175.43) ÷ $175.43 × 100 = -32.5%
```

**Classification Result:**
- High P/E (28.5 > 15) ✓
- High P/B (45.2 > 2) ✓  
- Negative DCF Gap (-32.5%) ✓
- **Result**: GROWTH - Overvalued

## 📚 Academic References

1. **Fama, E. F., & French, K. R. (1992).** "The Cross-Section of Expected Stock Returns." *Journal of Finance*, 47(2), 427-465.

2. **Fama, E. F., & French, K. R. (1993).** "Common Risk Factors in the Returns on Stocks and Bonds." *Journal of Financial Economics*, 33(1), 3-56.

3. **Damodaran, A. (2012).** *Investment Valuation: Tools and Techniques for Determining the Value of Any Asset*. Wiley Finance.

## ⚠️ Important Disclaimers

### Limitations

1. **Model Assumptions**: DCF calculations use simplified assumptions
2. **Data Lag**: Financial data may be 1-3 months delayed
3. **Market Dynamics**: Models don't account for sentiment or macro events
4. **Sector Variations**: Thresholds may not suit all industries

### Investment Warnings

- **Not Investment Advice**: All calculations for educational purposes
- **Professional Consultation**: Consult qualified advisors before investing
- **Risk Assessment**: Past performance doesn't predict future results
- **Diversification**: Single-stock analysis shouldn't drive portfolio decisions

---

📖 **This reference guide ensures transparency in all financial calculations used throughout the dashboard.**