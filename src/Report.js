import React from "react";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Report = ({ result }) => {
  console.log("result", result && result);

  const current = result.current;
  const location = result.location;

  return result && Object.keys(result).length > 0 ? (
    <div className="text-white">
      {/* Card ! */}
      <div class="bg-indigo-600 bg-opacity-75 w-full max-w-md p-4 border border-gray-900 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-lg font-semibold	">Status: </p>
                <p className="text-3xl font-semibold	">
                  {current.condition.text}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-lg font-semibold	">{`${current.temp_c} °C`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-lg font-semibold	">{`${current.temp_f} °F`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <WiHumidity />
                </p>
                <p className="text-lg font-semibold	">{`${current.humidity} %`}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Card ! */}
      <div class="bg-indigo-600 bg-opacity-75 w-full max-w-md p-4 border border-gray-900 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-lg font-semibold	">Status: </p>
                <p className="text-3xl font-semibold	">
                  {current.condition.text}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-lg font-semibold	">{`${current.temp_c} °C`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-lg font-semibold	">{`${current.temp_f} °F`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-4xl font-semibold	">
                  <WiHumidity />
                </p>
                <p className="text-lg font-semibold	">{`${current.humidity} %`}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default Report;
