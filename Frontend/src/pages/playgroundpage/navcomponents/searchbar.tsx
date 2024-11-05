import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 

const countries: string[] = [
    "United States", 
    "Canada", 
    "United Kingdom", 
    "Australia", 
    "France", 
    "Germany", 
    "Japan"
]; // Example countries, can be expanded

interface PassengerCount {
    adults: number;
    children: number;
}

const Searchbar: React.FC = () => {
    const [destination, setDestination] = useState<string>("");
    const [departDate, setDepartDate] = useState<Date | null>(null);
    const [passengerCount, setPassengerCount] = useState<PassengerCount>({ adults: 1, children: 0 });
    const [showPassengerDropdown, setShowPassengerDropdown] = useState<boolean>(false);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-4xl mx-auto">
            {/* Responsive grid layout for form inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Destination Dropdown */}
                <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                    <select
                        id="destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    >
                        <option value="">Select Destination</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                {/* Departure Date Picker */}
                <div>
                    <label htmlFor="depart-date" className="block text-sm font-medium text-gray-700">Departure Date</label>
                    <DatePicker
                        selected={departDate}
                        onChange={(date: Date | null) => setDepartDate(date)} // TypeScript-compatible onChange
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        dateFormat="MM/dd/yyyy"
                        calendarClassName="rounded-lg border border-gray-300 shadow-lg"
                    />
                     </div>
                    

                {/* Passenger Selection */}
                <div className="relative">
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Passengers</label>
                    <div
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm cursor-pointer"
                        onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                    >
                        {`${passengerCount.adults} Adults, ${passengerCount.children} Children`}
                    </div>
                    
                    {showPassengerDropdown && (
                        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">Adults</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setPassengerCount({ ...passengerCount, adults: Math.max(1, passengerCount.adults - 1) })}
                                        className="bg-gray-200 p-1 rounded-full text-gray-700 hover:bg-gray-300"
                                    >-</button>
                                    <span>{passengerCount.adults}</span>
                                    <button
                                        type="button"
                                        onClick={() => setPassengerCount({ ...passengerCount, adults: passengerCount.adults + 1 })}
                                        className="bg-gray-200 p-1 rounded-full text-gray-700 hover:bg-gray-300"
                                    >+</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">Children</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setPassengerCount({ ...passengerCount, children: Math.max(0, passengerCount.children - 1) })}
                                        className="bg-gray-200 p-1 rounded-full text-gray-700 hover:bg-gray-300"
                                    >-</button>
                                    <span>{passengerCount.children}</span>
                                    <button
                                        type="button"
                                        onClick={() => setPassengerCount({ ...passengerCount, children: passengerCount.children + 1 })}
                                        className="bg-gray-200 p-1 rounded-full text-gray-700 hover:bg-gray-300"
                                    >+</button>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowPassengerDropdown(false)}
                                className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Search Button */}
            <div className="mt-4">
                <button
                    type="submit"
                    className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                    Search Flights
                </button>
            </div>
        </div>
    );
}

export default Searchbar;