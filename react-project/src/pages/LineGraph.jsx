import Chart from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"

const LineGraph = () => {
    return(
        <div className="linechart">
            <Bar
                data = {{
                    labels: ["A", "B", "C"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [200, 300, 400]
                        }
                    ]
                }}
            />
        </div>

    )
}

export default LineGraph