import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

const dataStuff = [
    { name: 'Jan', value: 4500 },
    { name: 'Feb', value: 5100 },
    { name: 'Mar', value: 3900 },
    { name: 'Apr', value: 6200 },
    { name: 'May', value: 5500 },
    { name: 'Jun', value: 7000 },
];

const SalesDetail = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-xl">
                
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Recent Sales Activity
                </h2>

                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={dataStuff}
                            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
            </div>
        </div>
    );
};

export default SalesDetail;