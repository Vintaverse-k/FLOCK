"use client"

export default function GeneralTabbtn() {
  return (
    <div className="flex justify-end items-center space-x-3 mb-4">
      {/* Cancel Button */}
      <button
        className="border border-[#DFE1E7] text-gray-700 hover:bg-gray-100"
        style={{
          width: "119px",
          height: "40px",
          borderRadius: "8px",
        }}
      >
        Cancel
      </button>

      {/* Save Changes Button */}
      <button
        className="text-white"
        style={{
          width: "119px",
          height: "40px",
          borderRadius: "8px",
          backgroundColor: "#F34147",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(180deg, #F34147 0%, rgba(243, 65, 71, 0.2) 100%)",
        }}
      >
        Save Changes
      </button>
    </div>
  )
}
