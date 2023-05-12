import React from 'react'
import './Booking.css'
import Navbar from '../components/Navbar'

export default function Booking() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="cart">
                <div class="grid">
                    <div class="container-cart">
                        <div class="cart-body">
                            <div class="cart-body-left">
                                <table>
                                    <tr>
                                        <th>Thông tin tour</th>
                                        <th>Mô tả</th>
                                        <th>Đơn giá</th>
                                        <th>Số người tham gia:</th>
                                        <th>Thao tác</th>
                                        <th>Số tiền</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    <tr>
                                        <td><img src=".//acsset/img/1.jpg" alt="" /></td>
                                        <td>Tour Thái Lan 5N4Đ: Hà Nội- Bangkok - Pattaya (Bay VNA)</td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><input type="number" min="1" value="1" /></td>
                                        <td><span>Lưu</span></td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><span>Xóa</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src=".//acsset/img/1.jpg" alt="" /></td>
                                        <td>Tour Thái Lan 5N4Đ: Hà Nội- Bangkok - Pattaya (Bay VNA)</td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><input type="number" min="1" value="1" /></td>
                                        <td><span>Lưu</span></td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><span>Xóa</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src=".//acsset/img/1.jpg" alt="" /></td>
                                        <td>Tour Thái Lan 5N4Đ: Hà Nội- Bangkok - Pattaya (Bay VNA)</td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><input type="number" min="1" value="1" /></td>
                                        <td><span>Lưu</span></td>
                                        <td><p>6190000 <sub>đ</sub></p></td>
                                        <td><span>Xóa</span></td>
                                    </tr>
                                </table>
                            </div>

                            <div class="cart-body-right">
                                <table>
                                    <tr>
                                        <th colspan="2">THÀNH TIỀN</th>
                                    </tr>
                                    <tr>
                                        <td>SỐ TOUR THAM DỰ</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>TỔNG SỐ TIỀN</td>
                                        <td>6190000 <sub>đ</sub></td>
                                    </tr>
                                </table>
                                <div class="cart-body-right-button">
                                    <button>LIÊN HỆ TƯ VẤN</button>
                                    <button>YÊU CẦU ĐẶT</button>
                                </div>
                                <div class="cart-body-right-login">
                                    <p>TÀI KHOẢN</p>
                                    <p><a href="">Đăng nhập</a> tài khoản để hưởng ưu đãi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
