import './Internal-Component.css';

const InternalComponent = (props) => {

    return <div className='container-fluid' style={{ backgroundColor: props?.backgroundColor }}>
        <div className='row'>
            <div className='col-12 div-container'>
                <h1 style={{ color: props?.color }} className="mt-5">This is my Color Generator</h1>
                <button className="btn btn-primary btn-white" style={{ backgroundColor: `${props?.backgroundColor} !important` }} onClick={() => props.onClick()}>{props?.text}</button>
            </div>

        </div>
    </div>
}

export default InternalComponent;