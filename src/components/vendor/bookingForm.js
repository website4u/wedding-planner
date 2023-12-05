export default function bookingForm() {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                    Select Date:
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full border p-2"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Your Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border p-2"
                    required
                ></textarea>
            </div>

            <button
                type="button"
                className="bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-800"
            >
                Book Now
            </button>
        </form>
    );
}