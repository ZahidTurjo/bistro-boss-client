import { TiBookmark, TiCalendar, TiContacts, TiDocumentAdd, TiHome, TiShoppingBag, TiShoppingCart, TiStar, TiThList, TiThMenu, TiUser } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="max-w-7xl mx-auto" >

            <div className="flex ">
                <div className="w-64 min-h-screen bg-orange-300">
                    <ul className="menu">
                        {
                            isAdmin ? <>
                                <li>

                                    <NavLink to='/dashboard/adminHome'>
                                        <TiHome className="text-red-700 text-3xl"></TiHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/addItems'>
                                        <TiThMenu className="text-red-700 text-3xl"></TiThMenu>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/manageItems'>
                                        <TiThList className="text-red-700 text-3xl"></TiThList>
                                        Manage Items</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'>
                                        <TiBookmark className="text-red-700 text-3xl"></TiBookmark>
                                       Manage Bookings</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/users'>
                                        <TiUser className="text-red-700 text-3xl"></TiUser>
                                        All users</NavLink>
                                </li>
                            </>
                                :
                                <>
                                    <li>

                                        <NavLink to='/dashboard/userHome'>
                                            <TiHome className="text-red-700 text-3xl"></TiHome>
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/reservation'>
                                            <TiCalendar className="text-red-700 text-3xl"></TiCalendar>
                                            Reservation
                                        </NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/cart'>
                                            <TiShoppingCart className="text-red-700 text-3xl"></TiShoppingCart>
                                            My cart</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/review'>
                                            <TiStar className="text-red-700 text-3xl"></TiStar>
                                            Add a  Review</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to='/dashboard/bookings'>
                                            <TiDocumentAdd className="text-red-700 text-3xl"></TiDocumentAdd>
                                            My Bookings</NavLink>
                                    </li>

                                </>
                        }

                        <div className="divider"></div>
                        {/* sheared link */}
                        <li>

                            <NavLink to='/'>
                                <TiHome className="text-red-700 text-3xl"></TiHome>
                                Home
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to='/menu'>
                                <TiThMenu className="text-red-700 text-3xl"></TiThMenu>
                                Menu
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to='/dashboard/userHome'>
                                <TiShoppingBag className="text-red-700 text-3xl"></TiShoppingBag>
                                Shop
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to='/contact'>
                                <TiContacts className="text-red-700 text-3xl"></TiContacts>
                                Contact
                            </NavLink>
                        </li>


                    </ul>
                </div>
                <div className="flex-grow p-8 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;