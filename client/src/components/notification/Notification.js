import React from 'react'

const CartNotification = ({message, tag, nature}) => {
    const border = nature === "success" ? "border-2 border-green-400" : "border-2 border-red-400"
    const logo = nature === "success" ? 
                                            <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#eb1f10" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
    return (
        // <!-- This is a the nofication to display -->
        <div className="m-auto flex justify-center">
            <div className={`bg-white rounded-lg ${border} p-3 shadow-lg`}>
                <div className="flex flex-row">
                    <div className="px-2">
                        {logo}
                    </div>
                    <div className="ml-2 mr-6">
                        <span className="font-semibold">{message}</span>
                        <span className="block text-gray-500">{tag}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartNotification