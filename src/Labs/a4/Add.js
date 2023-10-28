function Add({ a, b }) {
    return (
        <div>
            <h2>Add</h2>
            <p>
                {a} + {b} = {parseInt(a) + parseInt(b)}
            </p>
        </div>
    );
}
export default Add;