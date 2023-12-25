import dummybarcode from "@/assets/barcode.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const Invoice = () => {
  const fontHref = `https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap`;

  const heading = (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={fontHref} rel="stylesheet" />
      </>
    </>
  );

  const content = (
    <>
      {heading}
      <div
        style={{
          position: "relative",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <div className="flex flex-col p-4 sm:p-10 bg-white rounded-xl min-h-[65rem]">
          <div className="grid grid-cols-2 gap-6 justify-between mt-32">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 font-calibri">
                New East General Trading
              </h2>
              <span className="text-xs md:text-sm block text-gray-900 font-arials">
                Plot No.S21006, JAFZA South
              </span>
              <span className="text-xs md:text-sm block text-gray-900">
                P.O Box 41534
              </span>
              <span className="text-xs md:text-sm mt-4 block text-gray-900">
                Dubai
              </span>
              <div className="mt-8">
                <h2 className="text-base font-bold font-calibri text-gray-800">
                  VAT Registration No. : 10026302400003
                </h2>
                <span className="flex text-sm md:text-xl font-normal text-gray-400 -mt-3">
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . .
                </span>
                <h2 className="text-base font-bold font-calibri text-gray-800 mt-3">
                  Customer:
                </h2>
                <h2 className="text-base font-bold font-calibri text-gray-800">
                  Code: C0085
                </h2>
                <h2 className="text-base font-bold font-calibri mt-2 text-gray-800">
                  Name:{" "}
                  <span className="font-semibold font-arials text-sm text-gray-950">
                    AL JUMHOOR AUTO SPARE PARTS LLC-BATT
                  </span>
                </h2>
                <h3 className="font-medium font-calibri text-gray-800 pl-6 mt-5">
                  Al Nakheel
                </h3>
                <h3 className="font-bold font-calibri text-gray-800 mt-4">
                  VAT Registration No. :{" "}
                  <span className="font-medium ml-4">10026302400003</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col align-center">
              <div className="flex justify-center -mt-0.5 text-xl md:text-2xl font-extrabold text-gray-900 font-calibri">
                Tax Invoice
              </div>
              <img
                src={dummybarcode}
                style={{ height: "50px" }}
                alt="Logo"
                className="mt-2"
              />
              <span className="flex justify-center text-xl md:text-2xl -mt-3 font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . .
              </span>
              <div className="flex flex-row justify-between px-8 -mt-1">
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Document No.</h2>
                  <h3 className="font-semibold text-gray-600">324613</h3>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Document Date</h2>
                  <h3 className="font-semibold text-gray-600">29/11/2023</h3>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Page</h2>
                  <h3 className="font-semibold text-gray-600">1/1</h3>
                </div>
              </div>
              <span className="flex justify-center text-xl -mt-3 font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
              </span>
              <div className="flex flex-row justify-between px-8 -mt-1">
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Currency</h2>
                  <h3 className="font-semibold text-gray-600">AED</h3>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Ex. Rate</h2>
                  <h3 className="font-semibold text-gray-600">1.000000</h3>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Ref. No.</h2>
                  <h3 className="font-semibold text-gray-600">SO No. 308724</h3>
                </div>
              </div>
              <span className="flex justify-center text-xl -mt-3 font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
              </span>
              <div className="flex flex-row justify-between px-8 -mt-1">
                <div className="flex flex-col gap-1 text-xs">
                  <h2 className="font-bold">Remarks</h2>
                  <h3 className="font-semibold text-gray-600">
                    EUD749-RAK NAKHEEL-MIDLAJ
                  </h3>
                </div>
              </div>
              <span className="flex justify-center text-xl font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
              </span>
              <span className="flex justify-center text-xl -mt-3 font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
              </span>
              <div className="flex flex-row justify-between px-8">
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-bold">Sales Person</h2>
                  <h3 className="text-xs font-semibold text-gray-600">
                    EUD-Ajimon Kochuveettil Maikurian
                  </h3>
                </div>
              </div>
              <span className="flex justify-center text-xl -mt-3 font-normal text-gray-400">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-end text-sm font-poppins font-semibold italic">
            <span>Prices & Amount in : </span>
            <span className="ml-8">AED</span>
          </div>
          <Table className="border-[1.35px] border-black mt-2 min-h-[200px]">
            <TableHeader>
              <TableRow>
                <TableHead className="border-[1.35px] border-black w-[10px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    S/N
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black w-[160px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Item Code
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black w-[80px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Mfr. No.
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black w-[320px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Description
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Quantity
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Price
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black text-center w-[110px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Total Before VAT
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black w-[6px]">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    VAT %
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    VAT Amount
                  </span>
                </TableHead>
                <TableHead className="border-[1.35px] border-black">
                  <span className="text-gray-900 text-xs font-poppins font-bold">
                    Total Incl. VAT
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="font-arials text-xs">
                <TableCell className="border-[1.35px] border-black">
                  001
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  1401789-DT
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  1.21506
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  TURN SIGNAL RELAY-SC-D-TRUCK-199803-DT
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  2 PCS
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  74.88
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  149.77
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  5
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  7.49
                </TableCell>
                <TableCell className="border-[1.35px] border-black">
                  157.26
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-60 justify-between mt-3">
              <div className="text-sm font-bold font-arials">
                <div className="flex flex-row gap-3">
                  <span>Remarks: </span>
                  <span className="ml-4 text-xs font-normal w-[300px]">
                    Based On Sales Quotations 151815. Based on Sales Orders
                    308724. Based On Deliveried 313783
                  </span>
                </div>
                <div className="flex flex-row gap-3 mt-6">
                  <span>Total Quantity: </span>
                  <span className="ml-4 text-sm font-bold">2</span>
                </div>
                <div className="w-60">
                  <Separator className="my-1 mt-60 bg-gray-900 h-[1.4px]" />
                  <span className="flex justify-center">Received by </span>
                </div>
              </div>
              <div className="flex flex-col ml-5 font-poppins">
                <div className="flex flex-row justify-between text-xs font-bold">
                  <span className="w-[150px]">Total before Discount</span>
                  <span className="w-[20px]">:</span>
                  <span>149.77</span>
                </div>
                <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                <div className="flex flex-row justify-between text-xs font-bold mt-2">
                  <span className="w-[140px]">Discount</span>
                  <span className="w-[20px]">:</span>
                  <span>0.00</span>
                </div>
                <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                <div className="flex flex-row justify-between text-xs font-bold mt-2">
                  <span className="w-[150px]">Taxable Amount</span>
                  <span className="w-[20px]">:</span>
                  <span>149.77</span>
                </div>
                <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                <div className="flex flex-row justify-between text-xs font-bold mt-2">
                  <span className="w-[140px]">VAT</span>
                  <span className="w-[20px]">:</span>
                  <span>7.49</span>
                </div>
                <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                <div className="flex flex-row justify-between text-xs font-bold mt-2">
                  <span className="w-[150px]">Net Amount</span>
                  <span className="w-[20px]">:</span>
                  <span>157.26</span>
                </div>
                <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                <div className="w-60 mt-36 font-semibold font-poppins">
                  <Separator className="my-1 bg-gray-900 h-[1.4px]" />
                  <span className="flex justify-center text-sm">
                    Authorized Signatory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="antialiased">
      <div className="flex flex-col">
        <div className="container">{content}</div>
      </div>
    </div>
  );
};

export default Invoice;
