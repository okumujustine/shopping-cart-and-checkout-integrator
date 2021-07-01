import React from 'react'

function Alert({ position, alertList, autoDelete = true, dismissTime, type }) {

    const [list, setList] = React.useState(alertList);

    React.useEffect(() => {
        setList([...alertList]);
    }, [alertList]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && alertList.length && list.length) {
                deleteAlert(alertList[0].id);
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [alertList, autoDelete, dismissTime, list]);

    const deleteAlert = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = alertList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        alertList.splice(toastListItem, 1);
        setList([...list]);

    }


    return (
        <>
            <div className={`notification-container  ${position} `}>
                {
                    list.map((alert, i) =>
                        <div
                            key={i}
                            className={`notification toast ${position} ${type}`}
                        >
                            <button onClick={() => deleteAlert(alert.id)}>
                                X
                            </button>
                            <div>
                                <p className="notification-title">{alert.title}</p>
                                <p className="notification-message">
                                    {alert.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export {
    Alert
}
