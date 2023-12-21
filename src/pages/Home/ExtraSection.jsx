
const ExtraSection = () => {
    return (
        <div className="max-w-7xl mx-auto my-32">
            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">TO-DO</h2>
                        <p>Task Manager</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-primary">Go To Dashboard</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">ON-GOING</h2>
                        <p>Task Manager</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-primary">Go To Dashboard</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">COMPLETED</h2>
                        <p>Task Manager</p>
                        <div className="card-actions">
                            <button className="btn btn-outline btn-primary">Go To Dashboard</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
            </div>
        </div>
    );
};


export default ExtraSection;