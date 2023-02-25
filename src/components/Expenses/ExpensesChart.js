import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'STY', value: 0},
        { label: 'LUT', value: 0},
        { label: 'MAR', value: 0},
        { label: 'KWI', value: 0},
        { label: 'MAJ', value: 0},
        { label: 'LIP', value: 0},
        { label: 'SIE', value: 0},
        { label: 'WRZ', value: 0},
        { label: 'PAŹ', value: 0},
        { label: 'LIS', value: 0},
        { label: 'GRU', value: 0}
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />
}
export default ExpensesChart;