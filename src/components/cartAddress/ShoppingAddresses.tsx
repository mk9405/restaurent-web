import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function ShoppingAddresses() {
  return (
    <div className="flex-1 ">
      <div className="flex justify-between">
        <div className="w-[49%] border-red-500 border-2 rounded-xl px-5 py-2">
          <div className="flex items-center justify-between pb-2 border-b-2 border-red-200">
            <h1 className="font-bold text-lg">Billing Address #1</h1>
            <div className="flex gap-2">
              <div className="border-2 p-2 rounded-lg">
                <FaRegEdit size={24} />
              </div>
              <div className="border-2 p-2 rounded-lg text-red-500 border-red-500">
                <AiOutlineDelete size={24} />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h1 className="flex pb-2">
              Full Name: <p className="font-bold">Jost Batler</p>
            </h1>
            <h1 className="flex pb-2">
              Email: <p className="font-bold">Jostbatler@gmail.com</p>
            </h1>
            <h1 className="flex pb-2">
              Phone: <p className="font-bold">+10123456789</p>
            </h1>
            <h1 className="flex pb-2">
              Country: <p className="font-bold">Bangladesh</p>
            </h1>
            <h1 className="flex pb-2">
              State: <p className="font-bold">Dhaka</p>
            </h1>
            <h1 className="flex pb-2">
              City: <p className="font-bold">Dhaka</p>
            </h1>
            <h1 className="flex pb-2">
              Address: <p className="font-bold">Mirpur-11, Dhaka, Bangladesh</p>
            </h1>
          </div>
        </div>

        <div className="w-[49%] bg-[#f4f4f6] rounded-xl px-5 py-2">
          <div className="flex items-center justify-between pb-2 border-b-2 border-red-200">
            <h1 className="font-bold text-lg">Shipping Address #2</h1>
            <div className="flex gap-2">
              <div className="border-2 p-2 rounded-lg">
                <FaRegEdit size={24} />
              </div>
              <div className="border-2 p-2 rounded-lg text-red-500 border-red-500">
                <AiOutlineDelete size={24} />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h1 className="flex pb-2">
              Full Name: <p className="font-bold">Jost Batler</p>
            </h1>
            <h1 className="flex pb-2">
              Email: <p className="font-bold">Jostbatler@gmail.com</p>
            </h1>
            <h1 className="flex pb-2">
              Phone: <p className="font-bold">+10123456789</p>
            </h1>
            <h1 className="flex pb-2">
              Country: <p className="font-bold">Bangladesh</p>
            </h1>
            <h1 className="flex pb-2">
              State: <p className="font-bold">Dhaka</p>
            </h1>
            <h1 className="flex pb-2">
              City: <p className="font-bold">Dhaka</p>
            </h1>
            <h1 className="flex pb-2">
              Address: <p className="font-bold">Mirpur-11, Dhaka, Bangladesh</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
