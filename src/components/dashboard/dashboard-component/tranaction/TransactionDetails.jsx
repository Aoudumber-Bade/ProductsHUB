import React, { useState } from 'react'

const TransactionDetails = () => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            date: '2023-09-27 10:15 AM',
            description: 'Purchase Course 1',
            amount: 99.99,
            cardholderName: 'John Doe',
            cardNumber: '**** **** **** 1234',
            paymentStatus: 'Success',
            product: 'React Masterclass',
            transactionType: 'Online Purchase',
        }

    ]);
    return <>
        <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
            {/* Modal window code */}
            {transactions &&
                transactions.map((item, index) => (
                    <div
                        key={index}
                        className=" mb-6 p-4 pr-[16rem] pl-8 rounded-md hover:shadow-lg transition duration-300 bg-indigo-50"
                    >
                        <p className="text-xl font-semibold text-indigo-600">
                            {item.product}
                        </p>
                        <div className="mt-4">
                            <p className="text-gray-600 mb-2">
                                <strong>Date:</strong> {item.date}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Description:</strong> {item.description}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Amount:</strong> ${item.amount}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Cardholder Name:</strong> {item.cardholderName}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Card Number:</strong> {item.cardNumber}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Payment Status:</strong> {item.paymentStatus}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Transaction Type:</strong> {item.transactionType}
                            </p>
                        </div>
                    </div>
                ))}
        </div>



    </>
}

export default TransactionDetails
