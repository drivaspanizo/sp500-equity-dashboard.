
"""
S&P 500 Equity Intelligence Dashboard - Live Data Fetcher
==========================================================

This script fetches real-time financial data for selected S&P 500 stocks using yfinance,
and prepares it in the format required by the frontend dashboard.

Required Libraries:
- yfinance
- pandas
- json

Install using:
pip install yfinance pandas
"""

import yfinance as yf
import pandas as pd
import json

# Step 1: Get a sample list of S&P 500 companies (replace or expand as needed)
symbols = ["AAPL", "MSFT", "JPM", "GOOGL", "META", "AMZN", "XOM", "NVDA", "TSLA", "V"]

output = []

for symbol in symbols:
    ticker = yf.Ticker(symbol)
    info = ticker.info

    try:
        data = {
            "symbol": symbol,
            "company_name": info.get("longName", ""),
            "sector": info.get("sector", ""),
            "market_cap": info.get("marketCap", 0),
            "price": info.get("currentPrice", 0),
            "pe_ratio": info.get("trailingPE", 0),
            "pb_ratio": info.get("priceToBook", 0),
            "ev_ebit": info.get("enterpriseToEbitda", 0),
            "fcf_yield": 0,  # Custom calculation possible via cashflow/freeCashflow
            "roic": 0,       # Requires custom formula (NOPAT / Invested Capital)
            "debt_equity": info.get("debtToEquity", 0),
            "eps_cagr": 0,
            "sales_cagr": 0,
            "dividend_yield": info.get("dividendYield", 0),
            "classification": "Value" if info.get("trailingPE", 99) < 15 else "Growth",
            "valuation_tag": "VALUE - Undervalued" if info.get("trailingPE", 99) < 12 else "VALUE - Fairly Valued",
            "fair_value": info.get("targetMeanPrice", 0)
        }

        output.append(data)

    except Exception as e:
        print(f"Error fetching {symbol}: {e}")

# Step 2: Save as JSON in the format the dashboard expects
with open("sp500_live_data.json", "w") as f:
    json.dump({"sp500_stocks": output}, f, indent=4)

print("✅ Data successfully saved to sp500_live_data.json")
