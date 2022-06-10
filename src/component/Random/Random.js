import './Random.css';
import { useState } from "react";

function Random(props) {
    const Component = props.component;
    const [backgroundColor, setBackgroundColor] = useState('');
    const [color, setcolor] = useState('');
    const generateRandomColor = (number) => {

        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * number)];
        }
        return color
    }

    const handleSetting = () => {
        setBackgroundColor(generateRandomColor(11));
        setcolor(generateRandomColor(10));
    }
    return (
        <Component onClick={handleSetting} backgroundColor={backgroundColor} color={color} Element={props?.Element} text={props?.text}></Component>
    )
}
export default Random;
