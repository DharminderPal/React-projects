import "./btnonly.css"

const Notify = (notificatiion, close_noti) => {
    const onclose = () => {
        if (typeof close_noti === "function") {
            close_noti();
        };


    };


    return (


        <div className="set">
            <p>meassage</p>
            <button onClick={onclose}>close</button>
        </div>


    )

}

export default Notify;