
export default [{ id: 'code', title: 'code' },
        { id: 'name', title: 'name' },
        { id: 'price', title: 'price', select: '#price' },
        { id: 'percent', title: 'percent', select: '#changeP' },
        { id: 'abs', title: 'abs', select: '#change' },
        { id: 'up', title: 'up', select: '#hqDetails > table > tbody > tr:nth-child(2) > td.up' },
        { id: 'down', title: 'down', select: '#hqDetails > table > tbody > tr:nth-child(3) > td.down' },
        { id: 'time', title: 'time', select: '#hqTime' },
        { id: 'TurnoverRate', title: 'TurnoverRate', select: '#hqDetails > table > tbody > tr:nth-child(1) > td:nth-child(4)' },// 成交量
        { id: 'volumeOfTransaction', title: 'volumeOfTransaction', select: '#hqDetails > table > tbody > tr:nth-child(2) > td:nth-child(6)' }, // 换手率
        { id: 'Turnover', title: 'Turnover', select: '#hqDetails > table > tbody > tr:nth-child(2) > td:nth-child(4)' }, // 成交额
        { id: 'TTM', title: 'TTM', select: '#hqDetails > table > tbody > tr:nth-child(4) > td:nth-child(6)' }, // 市盈率
        { id: '(P/B)', title: '(P/B)', select: '#hqDetails > table > tbody > tr:nth-child(3) > td:nth-child(6)' }, // 市净率
 ]

