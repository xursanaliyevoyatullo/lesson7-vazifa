
function Form() {
    return (
        <>
            <h1 className="py-3">Send us Questions</h1>
            <hr />
            <div className="w-full max-w-xs m-auto pt-20">
                <form>
                    <label className="block mb-5">
                        <span className="block mb-3">Your Email:</span>
                        <input className="w-full py-1 px-3 bg-slate-300 text-white cursor-pointer" type="text" />
                    </label>
                    <label className="block mb-10">
                        <span className="block mb-3">Phone Number:</span>
                        <input className="w-full py-1 px-3 bg-slate-300 text-white cursor-pointer" type="number" />
                    </label>
                    <button className="bg-lime-600 rounded border-0 pt-2 py-1 cursor-pointer text-white block w-full mb-7">Send</button>
                </form> 
            </div>
        </> 
    )
}

export default Form