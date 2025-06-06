// S&P 500 Data
const sp500Data = {
  "sp500_stocks": [
    {
      "symbol": "AAPL",
      "company_name": "Apple Inc.",
      "sector": "Technology",
      "market_cap": 3363000000000,
      "price": 175.43,
      "pe_ratio": 28.5,
      "pb_ratio": 45.2,
      "ev_ebit": 22.1,
      "dcf_gap": -12.5,
      "fcf_yield": 3.2,
      "roic": 28.7,
      "roe": 147.4,
      "operating_margin": 30.1,
      "debt_equity": 1.73,
      "interest_coverage": 25.6,
      "eps_cagr": 8.9,
      "sales_cagr": 5.4,
      "dividend_yield": 0.5,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 198.50
    },
    {
      "symbol": "MSFT",
      "company_name": "Microsoft Corporation",
      "sector": "Technology",
      "market_cap": 3321000000000,
      "price": 441.23,
      "pe_ratio": 31.2,
      "pb_ratio": 12.8,
      "ev_ebit": 24.7,
      "dcf_gap": -8.3,
      "fcf_yield": 2.8,
      "roic": 22.1,
      "roe": 35.6,
      "operating_margin": 42.0,
      "debt_equity": 0.47,
      "interest_coverage": 42.1,
      "eps_cagr": 12.3,
      "sales_cagr": 8.7,
      "dividend_yield": 0.7,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 481.50
    },
    {
      "symbol": "JPM",
      "company_name": "JPMorgan Chase & Co.",
      "sector": "Financials",
      "market_cap": 744020000000,
      "price": 252.15,
      "pe_ratio": 12.4,
      "pb_ratio": 1.8,
      "ev_ebit": 8.2,
      "dcf_gap": 15.7,
      "fcf_yield": 8.1,
      "roic": 15.2,
      "roe": 14.8,
      "operating_margin": 35.2,
      "debt_equity": 1.21,
      "interest_coverage": 3.2,
      "eps_cagr": 4.2,
      "sales_cagr": 3.8,
      "dividend_yield": 2.1,
      "classification": "Value",
      "valuation_tag": "VALUE - Undervalued",
      "fair_value": 291.80
    },
    {
      "symbol": "JNJ",
      "company_name": "Johnson & Johnson",
      "sector": "Healthcare",
      "market_cap": 425600000000,
      "price": 176.82,
      "pe_ratio": 16.3,
      "pb_ratio": 5.2,
      "ev_ebit": 12.8,
      "dcf_gap": 8.4,
      "fcf_yield": 4.7,
      "roic": 18.3,
      "roe": 24.1,
      "operating_margin": 24.6,
      "debt_equity": 0.46,
      "interest_coverage": 18.7,
      "eps_cagr": 2.1,
      "sales_cagr": 1.8,
      "dividend_yield": 2.9,
      "classification": "Value",
      "valuation_tag": "VALUE - Undervalued",
      "fair_value": 191.70
    },
    {
      "symbol": "WMT",
      "company_name": "Walmart Inc.",
      "sector": "Consumer Staples",
      "market_cap": 753610000000,
      "price": 95.24,
      "pe_ratio": 27.1,
      "pb_ratio": 5.8,
      "ev_ebit": 15.2,
      "dcf_gap": -2.1,
      "fcf_yield": 2.9,
      "roic": 13.8,
      "roe": 22.4,
      "operating_margin": 4.1,
      "debt_equity": 0.58,
      "interest_coverage": 9.4,
      "eps_cagr": 6.8,
      "sales_cagr": 2.4,
      "dividend_yield": 2.2,
      "classification": "Value",
      "valuation_tag": "VALUE - Fairly Valued",
      "fair_value": 97.30
    },
    {
      "symbol": "PG",
      "company_name": "The Procter & Gamble Company",
      "sector": "Consumer Staples",
      "market_cap": 368450000000,
      "price": 159.67,
      "pe_ratio": 24.8,
      "pb_ratio": 7.9,
      "ev_ebit": 18.3,
      "dcf_gap": -5.2,
      "fcf_yield": 3.8,
      "roic": 21.7,
      "roe": 32.1,
      "operating_margin": 22.4,
      "debt_equity": 0.52,
      "interest_coverage": 12.6,
      "eps_cagr": 4.7,
      "sales_cagr": 2.1,
      "dividend_yield": 2.4,
      "classification": "Value",
      "valuation_tag": "VALUE - Overvalued",
      "fair_value": 151.20
    },
    {
      "symbol": "BAC",
      "company_name": "Bank of America Corporation",
      "sector": "Financials",
      "market_cap": 328900000000,
      "price": 44.15,
      "pe_ratio": 14.7,
      "pb_ratio": 1.3,
      "ev_ebit": 9.8,
      "dcf_gap": 12.3,
      "fcf_yield": 6.8,
      "roic": 11.2,
      "roe": 8.9,
      "operating_margin": 32.1,
      "debt_equity": 1.18,
      "interest_coverage": 2.8,
      "eps_cagr": 8.4,
      "sales_cagr": 5.2,
      "dividend_yield": 2.4,
      "classification": "Value",
      "valuation_tag": "VALUE - Undervalued",
      "fair_value": 49.60
    },
    {
      "symbol": "HD",
      "company_name": "The Home Depot, Inc.",
      "sector": "Consumer Discretionary",
      "market_cap": 421800000000,
      "price": 411.42,
      "pe_ratio": 26.3,
      "pb_ratio": 145.2,
      "ev_ebit": 19.7,
      "dcf_gap": -3.8,
      "fcf_yield": 3.1,
      "roic": 45.8,
      "roe": 1247.3,
      "operating_margin": 15.3,
      "debt_equity": 7.42,
      "interest_coverage": 18.9,
      "eps_cagr": 7.2,
      "sales_cagr": 4.1,
      "dividend_yield": 2.3,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 427.80
    },
    {
      "symbol": "V",
      "company_name": "Visa Inc.",
      "sector": "Financials",
      "market_cap": 635570000000,
      "price": 308.21,
      "pe_ratio": 32.1,
      "pb_ratio": 13.8,
      "ev_ebit": 28.4,
      "dcf_gap": -7.2,
      "fcf_yield": 2.1,
      "roic": 37.2,
      "roe": 42.8,
      "operating_margin": 66.8,
      "debt_equity": 0.38,
      "interest_coverage": 54.2,
      "eps_cagr": 11.8,
      "sales_cagr": 9.4,
      "dividend_yield": 0.7,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 331.20
    },
    {
      "symbol": "MA",
      "company_name": "Mastercard Incorporated",
      "sector": "Financials",
      "market_cap": 490320000000,
      "price": 522.45,
      "pe_ratio": 35.7,
      "pb_ratio": 52.1,
      "ev_ebit": 31.2,
      "dcf_gap": -9.1,
      "fcf_yield": 1.8,
      "roic": 142.7,
      "roe": 148.2,
      "operating_margin": 58.4,
      "debt_equity": 2.14,
      "interest_coverage": 78.3,
      "eps_cagr": 13.2,
      "sales_cagr": 10.7,
      "dividend_yield": 0.5,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 571.80
    },
    {
      "symbol": "UNH",
      "company_name": "UnitedHealth Group Incorporated",
      "sector": "Healthcare",
      "market_cap": 527890000000,
      "price": 580.33,
      "pe_ratio": 25.4,
      "pb_ratio": 6.1,
      "ev_ebit": 18.7,
      "dcf_gap": 2.1,
      "fcf_yield": 3.4,
      "roic": 23.8,
      "roe": 24.1,
      "operating_margin": 8.2,
      "debt_equity": 0.62,
      "interest_coverage": 14.7,
      "eps_cagr": 14.2,
      "sales_cagr": 12.8,
      "dividend_yield": 1.2,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Momentum",
      "fair_value": 592.50
    },
    {
      "symbol": "LLY",
      "company_name": "Eli Lilly and Company",
      "sector": "Healthcare",
      "market_cap": 689420000000,
      "price": 748.55,
      "pe_ratio": 65.3,
      "pb_ratio": 28.4,
      "ev_ebit": 42.1,
      "dcf_gap": -18.7,
      "fcf_yield": 1.2,
      "roic": 42.3,
      "roe": 43.5,
      "operating_margin": 28.7,
      "debt_equity": 1.85,
      "interest_coverage": 23.4,
      "eps_cagr": 28.4,
      "sales_cagr": 22.1,
      "dividend_yield": 0.6,
      "classification": "Growth",
      "valuation_tag": "GROWTH - Watchlist",
      "fair_value": 618.20
    },
    {
      "symbol": "CVX",
      "company_name": "Chevron Corporation",
      "sector": "Energy",
      "market_cap": 286340000000,
      "price": 159.42,
      "pe_ratio": 14.2,
      "pb_ratio": 1.7,
      "ev_ebit": 8.9,
      "dcf_gap": 18.3,
      "fcf_yield": 7.8,
      "roic": 12.4,
      "roe": 12.1,
      "operating_margin": 10.2,
      "debt_equity": 0.24,
      "interest_coverage": 42.7,
      "eps_cagr": -2.1,
      "sales_cagr": 4.8,
      "dividend_yield": 3.1,
      "classification": "Value",
      "valuation_tag": "VALUE - Undervalued",
      "fair_value": 188.70
    },
    {
      "symbol": "XOM",
      "company_name": "Exxon Mobil Corporation",
      "sector": "Energy",
      "market_cap": 467280000000,
      "price": 116.78,
      "pe_ratio": 13.8,
      "pb_ratio": 1.9,
      "ev_ebit": 7.2,
      "dcf_gap": 22.1,
      "fcf_yield": 8.9,
      "roic": 17.2,
      "roe": 13.8,
      "operating_margin": 8.7,
      "debt_equity": 0.22,
      "interest_coverage": 18.4,
      "eps_cagr": 15.2,
      "sales_cagr": 8.9,
      "dividend_yield": 3.4,
      "classification": "Value",
      "valuation_tag": "VALUE - Undervalued",
      "fair_value": 142.60
    },
    {
      "symbol": "KO",
      "company_name": "The Coca-Cola Company",
      "sector": "Consumer Staples",
      "market_cap": 267830000000,
      "price": 62.14,
      "pe_ratio": 25.7,
      "pb_ratio": 9.8,
      "ev_ebit": 21.4,
      "dcf_gap": -1.2,
      "fcf_yield": 3.2,
      "roic": 38.2,
      "roe": 38.1,
      "operating_margin": 30.2,
      "debt_equity": 1.73,
      "interest_coverage": 14.8,
      "eps_cagr": 1.8,
      "sales_cagr": 0.4,
      "dividend_yield": 2.9,
      "classification": "Value",
      "valuation_tag": "VALUE - Fairly Valued",
      "fair_value": 61.40
    }
  ],
  "sectors": ["Technology", "Healthcare", "Financials", "Consumer Discretionary", "Consumer Staples", "Energy", "Utilities", "Industrials", "Materials", "Real Estate", "Communication Services"]
};

// Global state
let filteredData = [...sp500Data.sp500_stocks];
let currentSort = { column: null, direction: 'asc' };
let charts = {};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initializing...');
    
    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
        try {
            initializeFilters();
            updateOverview();
            renderValueTable();
            initializeComparison();
            initializeHistorical();
            updateLeaderboard();
            initializeEventListeners();
            console.log('Dashboard initialized successfully');
        } catch (error) {
            console.error('Error initializing dashboard:', error);
        }
    }, 100);
});

// Initialize Filters
function initializeFilters() {
    console.log('Initializing filters...');
    
    const sectorFilter = document.getElementById('sectorFilter');
    const companySelect = document.getElementById('companySelect');
    const historicalSelect = document.getElementById('historicalCompanySelect');
    
    if (!sectorFilter || !companySelect || !historicalSelect) {
        console.error('Filter elements not found');
        return;
    }
    
    // Clear and populate sector filter
    sectorFilter.innerHTML = '<option value="">All Sectors</option>';
    sp500Data.sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
    
    // Clear and populate company selectors
    companySelect.innerHTML = '';
    historicalSelect.innerHTML = '<option value="">Select a company</option>';
    
    sp500Data.sp500_stocks.forEach(stock => {
        const option1 = document.createElement('option');
        option1.value = stock.symbol;
        option1.textContent = `${stock.symbol} - ${stock.company_name}`;
        companySelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = stock.symbol;
        option2.textContent = `${stock.symbol} - ${stock.company_name}`;
        historicalSelect.appendChild(option2);
    });
    
    console.log('Filters initialized');
}

// Update Overview Panel
function updateOverview() {
    console.log('Updating overview...');
    
    try {
        const valueStocks = filteredData.filter(stock => stock.classification === 'Value');
        const growthStocks = filteredData.filter(stock => stock.classification === 'Growth');
        
        const valueCountEl = document.getElementById('valueCount');
        const growthCountEl = document.getElementById('growthCount');
        
        if (valueCountEl) valueCountEl.textContent = valueStocks.length;
        if (growthCountEl) growthCountEl.textContent = growthStocks.length;
        
        // Calculate averages for value stocks
        if (valueStocks.length > 0) {
            const avgPE = valueStocks.reduce((sum, stock) => sum + stock.pe_ratio, 0) / valueStocks.length;
            const avgPB = valueStocks.reduce((sum, stock) => sum + stock.pb_ratio, 0) / valueStocks.length;
            const avgEV = valueStocks.reduce((sum, stock) => sum + stock.ev_ebit, 0) / valueStocks.length;
            
            const avgPEEl = document.getElementById('avgPEValue');
            const avgPBEl = document.getElementById('avgPBValue');
            const avgEVEl = document.getElementById('avgEVValue');
            
            if (avgPEEl) avgPEEl.textContent = avgPE.toFixed(1);
            if (avgPBEl) avgPBEl.textContent = avgPB.toFixed(1);
            if (avgEVEl) avgEVEl.textContent = avgEV.toFixed(1);
        }
        
        // Update sector chart
        updateSectorChart();
        
        console.log('Overview updated');
    } catch (error) {
        console.error('Error updating overview:', error);
    }
}

// Update Sector Chart
function updateSectorChart() {
    console.log('Updating sector chart...');
    
    try {
        const canvas = document.getElementById('sectorChart');
        if (!canvas) {
            console.error('Sector chart canvas not found');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        // Calculate sector distribution
        const sectorCounts = {};
        filteredData.forEach(stock => {
            sectorCounts[stock.sector] = (sectorCounts[stock.sector] || 0) + 1;
        });
        
        const labels = Object.keys(sectorCounts);
        const data = Object.values(sectorCounts);
        const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
        
        if (charts.sectorChart) {
            charts.sectorChart.destroy();
        }
        
        charts.sectorChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, labels.length),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
        
        console.log('Sector chart updated');
    } catch (error) {
        console.error('Error updating sector chart:', error);
    }
}

// Render Value Table
function renderValueTable() {
    console.log('Rendering value table...');
    
    try {
        const tbody = document.getElementById('valueTableBody');
        if (!tbody) {
            console.error('Value table body not found');
            return;
        }
        
        const valueStocks = filteredData.filter(stock => stock.classification === 'Value');
        
        tbody.innerHTML = '';
        
        if (valueStocks.length === 0) {
            tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 20px;">No value stocks match current filters</td></tr>';
            return;
        }
        
        valueStocks.forEach(stock => {
            const row = document.createElement('tr');
            
            // Apply heatmap styling
            const dcfClass = stock.dcf_gap > 10 ? 'cell-undervalued' : 
                            stock.dcf_gap < -5 ? 'cell-overvalued' : 'cell-fair';
            
            row.innerHTML = `
                <td>${stock.company_name}</td>
                <td>${stock.sector}</td>
                <td>${stock.pe_ratio.toFixed(1)}</td>
                <td>${stock.pb_ratio.toFixed(1)}</td>
                <td>${stock.ev_ebit.toFixed(1)}</td>
                <td class="${dcfClass}">${stock.dcf_gap.toFixed(1)}%</td>
                <td>${stock.fcf_yield.toFixed(1)}%</td>
                <td>${stock.roic.toFixed(1)}%</td>
                <td>$${stock.fair_value.toFixed(2)}</td>
                <td><span class="status-tag ${getStatusTagClass(stock.valuation_tag)}">${stock.valuation_tag}</span></td>
            `;
            
            tbody.appendChild(row);
        });
        
        console.log('Value table rendered with', valueStocks.length, 'stocks');
    } catch (error) {
        console.error('Error rendering value table:', error);
    }
}

// Get status tag CSS class
function getStatusTagClass(tag) {
    if (tag.includes('Undervalued')) return 'status-tag--value-undervalued';
    if (tag.includes('Fairly Valued')) return 'status-tag--value-fair';
    if (tag.includes('Overvalued')) return 'status-tag--value-overvalued';
    if (tag.includes('Momentum')) return 'status-tag--growth-momentum';
    if (tag.includes('Watchlist')) return 'status-tag--growth-watchlist';
    return '';
}

// Initialize Comparison Chart
function initializeComparison() {
    console.log('Initializing comparison chart...');
    
    try {
        const canvas = document.getElementById('comparisonChart');
        if (!canvas) {
            console.error('Comparison chart canvas not found');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        charts.comparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
        
        console.log('Comparison chart initialized');
    } catch (error) {
        console.error('Error initializing comparison chart:', error);
    }
}

// Update Comparison Chart
function updateComparisonChart() {
    console.log('Updating comparison chart...');
    
    try {
        const companySelect = document.getElementById('companySelect');
        const chartTypeSelect = document.getElementById('chartTypeSelect');
        
        if (!companySelect || !chartTypeSelect || !charts.comparisonChart) {
            console.error('Comparison chart elements not found');
            return;
        }
        
        const selectedCompanies = Array.from(companySelect.selectedOptions)
            .map(option => option.value);
        const chartType = chartTypeSelect.value;
        
        if (selectedCompanies.length < 2 || selectedCompanies.length > 5) {
            // Clear chart if invalid selection
            charts.comparisonChart.data.labels = [];
            charts.comparisonChart.data.datasets = [];
            charts.comparisonChart.update();
            return;
        }
        
        const companies = selectedCompanies.map(symbol => 
            sp500Data.sp500_stocks.find(stock => stock.symbol === symbol)
        ).filter(Boolean);
        
        let datasets = [];
        let labels = companies.map(company => company.symbol);
        
        const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
        
        switch (chartType) {
            case 'valuation':
                datasets = [
                    {
                        label: 'P/E Ratio',
                        data: companies.map(c => c.pe_ratio),
                        backgroundColor: colors[0]
                    },
                    {
                        label: 'P/B Ratio',
                        data: companies.map(c => c.pb_ratio),
                        backgroundColor: colors[1]
                    },
                    {
                        label: 'EV/EBIT',
                        data: companies.map(c => c.ev_ebit),
                        backgroundColor: colors[2]
                    }
                ];
                break;
            case 'profitability':
                datasets = [
                    {
                        label: 'ROIC (%)',
                        data: companies.map(c => c.roic),
                        backgroundColor: colors[0]
                    },
                    {
                        label: 'ROE (%)',
                        data: companies.map(c => c.roe),
                        backgroundColor: colors[1]
                    },
                    {
                        label: 'Operating Margin (%)',
                        data: companies.map(c => c.operating_margin),
                        backgroundColor: colors[2]
                    }
                ];
                break;
            case 'safety':
                datasets = [
                    {
                        label: 'Debt/Equity',
                        data: companies.map(c => c.debt_equity),
                        backgroundColor: colors[0]
                    },
                    {
                        label: 'Interest Coverage',
                        data: companies.map(c => c.interest_coverage),
                        backgroundColor: colors[1]
                    }
                ];
                break;
            case 'growth':
                datasets = [
                    {
                        label: 'EPS CAGR (%)',
                        data: companies.map(c => c.eps_cagr),
                        backgroundColor: colors[0]
                    },
                    {
                        label: 'Sales CAGR (%)',
                        data: companies.map(c => c.sales_cagr),
                        backgroundColor: colors[1]
                    }
                ];
                break;
            case 'dividends':
                datasets = [
                    {
                        label: 'Dividend Yield (%)',
                        data: companies.map(c => c.dividend_yield),
                        backgroundColor: colors[0]
                    }
                ];
                break;
        }
        
        charts.comparisonChart.data.labels = labels;
        charts.comparisonChart.data.datasets = datasets;
        charts.comparisonChart.update();
        
        console.log('Comparison chart updated for', companies.length, 'companies');
    } catch (error) {
        console.error('Error updating comparison chart:', error);
    }
}

// Initialize Historical Chart
function initializeHistorical() {
    console.log('Initializing historical chart...');
    
    try {
        const canvas = document.getElementById('historicalChart');
        if (!canvas) {
            console.error('Historical chart canvas not found');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        charts.historicalChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
        
        console.log('Historical chart initialized');
    } catch (error) {
        console.error('Error initializing historical chart:', error);
    }
}

// Update Historical Chart
function updateHistoricalChart() {
    console.log('Updating historical chart...');
    
    try {
        const historicalSelect = document.getElementById('historicalCompanySelect');
        
        if (!historicalSelect || !charts.historicalChart) {
            console.error('Historical chart elements not found');
            return;
        }
        
        const selectedSymbol = historicalSelect.value;
        
        if (!selectedSymbol) {
            charts.historicalChart.data.datasets = [];
            charts.historicalChart.update();
            return;
        }
        
        const stock = sp500Data.sp500_stocks.find(s => s.symbol === selectedSymbol);
        
        if (!stock) {
            console.error('Stock not found:', selectedSymbol);
            return;
        }
        
        // Generate mock historical data based on current values
        const generateHistorical = (currentValue, volatility = 0.2) => {
            const data = [];
            for (let i = 0; i < 6; i++) {
                const variation = (Math.random() - 0.5) * volatility * currentValue;
                data.push(Math.max(0.1, currentValue + variation));
            }
            return data;
        };
        
        const datasets = [
            {
                label: 'P/E Ratio',
                data: generateHistorical(stock.pe_ratio, 0.3),
                borderColor: '#1FB8CD',
                backgroundColor: '#1FB8CD20',
                fill: false
            },
            {
                label: 'P/B Ratio',
                data: generateHistorical(stock.pb_ratio, 0.25),
                borderColor: '#FFC185',
                backgroundColor: '#FFC18520',
                fill: false
            },
            {
                label: 'Stock Price',
                data: generateHistorical(stock.price, 0.4),
                borderColor: '#B4413C',
                backgroundColor: '#B4413C20',
                fill: false,
                yAxisID: 'y1'
            }
        ];
        
        charts.historicalChart.data.datasets = datasets;
        charts.historicalChart.options.scales.y1 = {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        };
        charts.historicalChart.update();
        
        console.log('Historical chart updated for', selectedSymbol);
    } catch (error) {
        console.error('Error updating historical chart:', error);
    }
}

// Update Leaderboard
function updateLeaderboard() {
    console.log('Updating leaderboard...');
    
    try {
        const leaderboardList = document.getElementById('leaderboardList');
        if (!leaderboardList) {
            console.error('Leaderboard list not found');
            return;
        }
        
        const valueStocks = filteredData.filter(stock => stock.classification === 'Value');
        
        // Sort by DCF gap (highest first for undervalued)
        const topUndervalued = valueStocks
            .filter(stock => stock.dcf_gap > 0)
            .sort((a, b) => b.dcf_gap - a.dcf_gap)
            .slice(0, 10);
        
        leaderboardList.innerHTML = '';
        
        if (topUndervalued.length === 0) {
            leaderboardList.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">No undervalued stocks found</div>';
            return;
        }
        
        topUndervalued.forEach((stock, index) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item';
            item.innerHTML = `
                <span class="leaderboard-rank">${index + 1}</span>
                <div class="leaderboard-company">
                    <strong>${stock.symbol}</strong> - ${stock.company_name}
                </div>
                <span class="leaderboard-gap">+${stock.dcf_gap.toFixed(1)}%</span>
            `;
            leaderboardList.appendChild(item);
        });
        
        console.log('Leaderboard updated with', topUndervalued.length, 'stocks');
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
}

// Apply Filters
function applyFilters() {
    console.log('Applying filters...');
    
    try {
        const sectorFilter = document.getElementById('sectorFilter');
        const valuationFilter = document.getElementById('valuationFilter');
        const dividendFilter = document.getElementById('dividendFilter');
        
        if (!sectorFilter || !valuationFilter || !dividendFilter) {
            console.error('Filter elements not found');
            return;
        }
        
        const sectorValue = sectorFilter.value;
        const valuationValue = valuationFilter.value;
        const dividendValue = parseFloat(dividendFilter.value);
        
        filteredData = sp500Data.sp500_stocks.filter(stock => {
            let match = true;
            
            if (sectorValue && stock.sector !== sectorValue) {
                match = false;
            }
            
            if (valuationValue) {
                const valuationStatus = stock.valuation_tag.split(' - ')[1];
                if (valuationValue === 'Undervalued' && valuationStatus !== 'Undervalued') match = false;
                if (valuationValue === 'Fairly Valued' && valuationStatus !== 'Fairly Valued') match = false;
                if (valuationValue === 'Overvalued' && valuationStatus !== 'Overvalued') match = false;
            }
            
            if (stock.dividend_yield < dividendValue) {
                match = false;
            }
            
            return match;
        });
        
        updateOverview();
        renderValueTable();
        updateLeaderboard();
        
        console.log('Filters applied, showing', filteredData.length, 'stocks');
    } catch (error) {
        console.error('Error applying filters:', error);
    }
}

// Sort Table
function sortTable(column) {
    console.log('Sorting table by', column);
    
    try {
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }
        
        filteredData.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];
            
            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }
            
            if (currentSort.direction === 'asc') {
                return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            } else {
                return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
            }
        });
        
        renderValueTable();
        updateSortIndicators();
        
        console.log('Table sorted');
    } catch (error) {
        console.error('Error sorting table:', error);
    }
}

// Update Sort Indicators
function updateSortIndicators() {
    try {
        document.querySelectorAll('.sortable').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
            if (th.dataset.column === currentSort.column) {
                th.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
            }
        });
    } catch (error) {
        console.error('Error updating sort indicators:', error);
    }
}

// Export Functions
function exportToCSV() {
    try {
        const headers = ['Symbol', 'Company', 'Sector', 'P/E', 'P/B', 'EV/EBIT', 'DCF Gap %', 'FCF Yield', 'ROIC', 'Fair Value', 'Valuation Tag'];
        const csvContent = [
            headers.join(','),
            ...filteredData.map(stock => [
                stock.symbol,
                `"${stock.company_name}"`,
                stock.sector,
                stock.pe_ratio,
                stock.pb_ratio,
                stock.ev_ebit,
                stock.dcf_gap,
                stock.fcf_yield,
                stock.roic,
                stock.fair_value,
                `"${stock.valuation_tag}"`
            ].join(','))
        ].join('\n');
        
        downloadFile(csvContent, 'sp500_equity_analysis.csv', 'text/csv');
        console.log('CSV export completed');
    } catch (error) {
        console.error('Error exporting CSV:', error);
    }
}

function exportToPDF() {
    try {
        if (typeof window.jspdf === 'undefined') {
            alert('PDF export not available');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(16);
        doc.text('S&P 500 Equity Intelligence Report', 20, 20);
        
        doc.setFontSize(12);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 35);
        doc.text(`Total Stocks Analyzed: ${filteredData.length}`, 20, 45);
        
        const valueStocks = filteredData.filter(s => s.classification === 'Value');
        const growthStocks = filteredData.filter(s => s.classification === 'Growth');
        
        doc.text(`Value Stocks: ${valueStocks.length}`, 20, 55);
        doc.text(`Growth Stocks: ${growthStocks.length}`, 20, 65);
        
        // Add top undervalued stocks
        doc.text('Top 5 Undervalued Value Stocks:', 20, 85);
        const topUndervalued = valueStocks
            .filter(stock => stock.dcf_gap > 0)
            .sort((a, b) => b.dcf_gap - a.dcf_gap)
            .slice(0, 5);
        
        topUndervalued.forEach((stock, index) => {
            doc.text(`${index + 1}. ${stock.symbol} - DCF Gap: +${stock.dcf_gap.toFixed(1)}%`, 25, 95 + (index * 10));
        });
        
        doc.save('sp500_equity_report.pdf');
        console.log('PDF export completed');
    } catch (error) {
        console.error('Error exporting PDF:', error);
        alert('PDF export failed');
    }
}

function downloadFile(content, filename, contentType) {
    try {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}

// Initialize Event Listeners
function initializeEventListeners() {
    console.log('Initializing event listeners...');
    
    try {
        // Filter controls
        const sectorFilter = document.getElementById('sectorFilter');
        const valuationFilter = document.getElementById('valuationFilter');
        const dividendFilter = document.getElementById('dividendFilter');
        const dividendValue = document.getElementById('dividendValue');
        
        if (sectorFilter) sectorFilter.addEventListener('change', applyFilters);
        if (valuationFilter) valuationFilter.addEventListener('change', applyFilters);
        
        if (dividendFilter && dividendValue) {
            dividendFilter.addEventListener('input', function() {
                dividendValue.textContent = `${this.value}%`;
                applyFilters();
            });
        }
        
        // Table sorting
        document.querySelectorAll('.sortable').forEach(th => {
            th.addEventListener('click', () => sortTable(th.dataset.column));
        });
        
        // Comparison chart
        const companySelect = document.getElementById('companySelect');
        const chartTypeSelect = document.getElementById('chartTypeSelect');
        
        if (companySelect) companySelect.addEventListener('change', updateComparisonChart);
        if (chartTypeSelect) chartTypeSelect.addEventListener('change', updateComparisonChart);
        
        // Historical chart
        const historicalSelect = document.getElementById('historicalCompanySelect');
        if (historicalSelect) historicalSelect.addEventListener('change', updateHistoricalChart);
        
        // Modal controls
        const alertsBtn = document.getElementById('alertsBtn');
        const exportBtn = document.getElementById('exportBtn');
        const closeModal = document.getElementById('closeModal');
        const closeExportModal = document.getElementById('closeExportModal');
        
        if (alertsBtn) {
            alertsBtn.addEventListener('click', () => {
                const modal = document.getElementById('alertModal');
                if (modal) modal.style.display = 'block';
            });
        }
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                const modal = document.getElementById('exportModal');
                if (modal) modal.style.display = 'block';
            });
        }
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                const modal = document.getElementById('alertModal');
                if (modal) modal.style.display = 'none';
            });
        }
        
        if (closeExportModal) {
            closeExportModal.addEventListener('click', () => {
                const modal = document.getElementById('exportModal');
                if (modal) modal.style.display = 'none';
            });
        }
        
        // Alert thresholds
        const peThreshold = document.getElementById('peThreshold');
        const peThresholdValue = document.getElementById('peThresholdValue');
        if (peThreshold && peThresholdValue) {
            peThreshold.addEventListener('input', function() {
                peThresholdValue.textContent = this.value;
            });
        }
        
        const dcfThreshold = document.getElementById('dcfThreshold');
        const dcfThresholdValue = document.getElementById('dcfThresholdValue');
        if (dcfThreshold && dcfThresholdValue) {
            dcfThreshold.addEventListener('input', function() {
                dcfThresholdValue.textContent = `${this.value}%`;
            });
        }
        
        // Export buttons
        document.querySelectorAll('.export-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const format = this.dataset.format;
                switch (format) {
                    case 'csv':
                        exportToCSV();
                        break;
                    case 'excel':
                        exportToCSV(); // For simplicity, using CSV for Excel
                        break;
                    case 'pdf':
                        exportToPDF();
                        break;
                }
                const modal = document.getElementById('exportModal');
                if (modal) modal.style.display = 'none';
            });
        });
        
        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            const alertModal = document.getElementById('alertModal');
            const exportModal = document.getElementById('exportModal');
            
            if (event.target === alertModal && alertModal) {
                alertModal.style.display = 'none';
            }
            if (event.target === exportModal && exportModal) {
                exportModal.style.display = 'none';
            }
        });
        
        console.log('Event listeners initialized');
    } catch (error) {
        console.error('Error initializing event listeners:', error);
    }
fetch('sp500_live_data.json')
  .then(response => response.json())
  .then(data => {
    const updateTime = data.last_updated || "Unknown";
    document.getElementById('last-updated').textContent = `Last updated: ${updateTime}`;
    const stocks = data.sp500_stocks;

}