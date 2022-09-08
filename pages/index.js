import { useState, useEffect } from "react";
import { calculatePral } from "../helperFunctions";
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function Home() {
  const [protein, setProtein] = useState(0);
  const [p, setP] = useState(0);
  const [k, setK] = useState(0);
  const [mg, setMg] = useState(0);
  const [ca, setCa] = useState(0);

  const [pral, setPral] = useState(0);

  useEffect(() => {
    let pral = calculatePral(protein, p, k, mg, ca);
    setPral(pral);
  }, [protein, p, k, mg, ca]);

  return (
    <div class="min-h-screen bg-gray-200 p-4 flex">
      <div class="bg-white rounded-md shadow-md flex-1 flex flex-col items-center">
        <table className="table-auto ">
          <tbody>
            <tr className="">
              <td className="">Protein (g)</td>
              <td>
                <NumberInput value={protein} onChange={(n) => setProtein(n)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </td>
            </tr>
            <tr className="">
              <td className="">Potassium (mg)</td>
              <td>
                <NumberInput value={k} onChange={(n) => setK(n)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </td>
            </tr>
            <tr className="">
              <td>Magnesium (mg)</td>
              <td>
                <NumberInput value={mg} onChange={(n) => setMg(n)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </td>
            </tr>
            <tr className="">
              <td>Calcium (mg)</td>
              <td>
                <NumberInput value={ca} onChange={(n) => setCa(n)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </td>
            </tr>
          </tbody>
        </table>
        {/* pral */}
        <h1 class="font-bold text-3xl mt-8">PRAL: {pral}</h1>
      </div>
    </div>
  );
}
