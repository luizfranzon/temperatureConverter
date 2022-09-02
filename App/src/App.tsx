import { ArrowsLeftRight } from "phosphor-react";
import { useState } from "react";
import "./App.scss";

export function App() {
    const [celsiusValue, setCelsiusValue] = useState(32);
    const [fahrenheitValue, setFahrenheitValue] = useState(0);

    function handleFahrenheitValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        let actualValue = Number(event.target.value);
        let result = (actualValue * 9/5) + 32
        setCelsiusValue(Number(result.toFixed(1)));
        setFahrenheitValue(actualValue)
    }
    
    function handleCelsiusValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        let actualValue = Number(event.target.value);
        let result = (actualValue - 32) * 5/9
        setFahrenheitValue(Number(result.toFixed(1)))
        setCelsiusValue(actualValue)
    }

    return (
        <main>
            <div className="inputBox">
                <span>Celsius</span>
                <input
                    onChange={handleFahrenheitValueChange}
                    type="number"
                    value={fahrenheitValue}
                />
            </div>
            <ArrowsLeftRight size={48} color="#ffffff" />
            <div className="inputBox">
                <span>Fahrenheit</span>
                <input
                    onChange={handleCelsiusValueChange}
                    type="number"
                    value={celsiusValue}
                />
            </div>
        </main>
    );
}
