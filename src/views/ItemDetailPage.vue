<template>
    <main class="mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div
                        id="carouselExampleIndicators"
                        class="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                    >
                        <ol class="carousel-indicators">
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                class="active"
                            ></li>
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                            ></li>
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                            ></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="`carousel-item">
                                <img
                                    src="https://cdn.pixabay.com/photo/2021/12/10/08/24/bird-6860047__340.jpg"
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">상세 상품명</h5>
                            <h5 class="card-title pt-3 pb-3 border-top">
                                219,000원
                            </h5>

                            <p class="card-text border-top pt-3">
                                <span class="badge bg-dark me-1">전자제품</span>
                                <span class="badge bg-dark me-1">컴퓨터</span>
                                <span class="badge bg-dark">악세사리</span>
                            </p>

                            <br />
                            <p class="card-text pb-3">
                                배송비 2,500원 | 도서산간(제주도) 배송비 추가
                                5,000원 | 택배배송 | 5일 이내 출고 (주말,공휴일
                                제외)
                            </p>
                            <div class="card-text border-top pb-3">
                                <div class="row">
                                    <div class="col-auto">
                                        <label class="col-form-label"
                                            >구매수량</label
                                        >
                                    </div>
                                    <div class="col-auto">
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                style="cursor: pointer"
                                                >-</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                style="width: 40px"
                                                v-model="total"
                                            />
                                            <span
                                                class="input-group-text"
                                                style="cursor: pointer"
                                                >+</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pb-3 border-top">
                                <div class="col-6">
                                    <h3>총 상품 금액</h3>
                                </div>
                                <div class="col-6" style="text-align: right">
                                    <h3>219,000원</h3>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center"
                            >
                                <div class="col-6 d-grid p-1">
                                    <button
                                        type="button"
                                        class="btn btn-lg btn-dark"
                                    >
                                        장바구니 담기
                                    </button>
                                </div>
                                <div class="col-6 d-grid p-1">
                                    <button
                                        type="button"
                                        class="btn btn-lg btn-danger"
                                    >
                                        주문하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <img
                        src="https://cdn.pixabay.com/photo/2023/01/14/13/01/car-7718136_960_720.jpg"
                        class="img-fluid"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            total: 1,
        };
    },
};
</script>
