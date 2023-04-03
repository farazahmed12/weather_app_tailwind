import React from "react";

import {
  FaTemperatureHigh,
  FaCloud,
  FaEye,
  FaWind,
  FaRadiationAlt,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

const Report = ({ result }) => {
  const current = result?.current;
  const location = result?.location;

  return result && Object.keys(result).length > 0 ? (
    <div className="flex flex-row justify-evenly gap-0 sm:gap-4 text-white">
      {/* Card 1 */}
      <div class="bg-indigo-600 bg-opacity-75 w-full max-w-[7.9rem] sm:max-w-lg p-4 border border-gray-900 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-xs sm:text-lg font-semibold	">Status: </p>
                <p className="text-sm sm:text-2xl font-semibold	">
                  {current.condition.text}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-2">
                <p className="text-xs sm:text-lg font-semibold	">Country: </p>
                <p className="text-sm sm:text-lg font-semibold	">
                  {location.country}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-2">
                <p className="text-xs sm:text-lg font-semibold	">Latitude: </p>
                <p className="text-sm sm:text-lg font-semibold	">
                  {location.lat}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-2">
                <p className="text-xs sm:text-lg font-semibold	">Longitude: </p>
                <p className="text-sm sm:text-lg font-semibold	">
                  {location.lon}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Card 2 */}
      <div class="bg-indigo-600 bg-opacity-75 w-full max-w-[7.9rem] sm:max-w-lg p-4 border border-gray-900 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-3xl sm:text-4xl text-white font-semibold">
                  <MdLocationOn />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">
                  {location.name}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${current.temp_c} °C`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <FaTemperatureHigh />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${Math.round(
                  current.temp_f
                )} °F`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <WiHumidity />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${current.humidity} %`}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Card 3 */}
      <div class="bg-indigo-600 bg-opacity-75 w-full max-w-[7.9rem] sm:max-w-lg p-4 border border-gray-900 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-4">
                <p className="text-3xl sm:text-4xl text-white font-semibold">
                  <FaCloud />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">
                  {`${current.cloud} %`}
                </p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-8">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <FaEye />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${current.vis_km} km`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-8">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <FaWind />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${Math.round(
                  current.wind_kph
                )} kph`}</p>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex flex-row justify-between items-center space-x-8">
                <p className="text-3xl sm:text-4xl font-semibold	">
                  <WiHumidity />
                </p>
                <p className="text-sm sm:text-lg font-semibold	">{`${current.humidity} %`}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default Report;
