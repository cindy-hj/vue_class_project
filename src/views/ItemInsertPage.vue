<template>
    <div class="wrap">
        <div class="title">
            <h3>제품 등록</h3>
        </div>
        <div class="box">
            <div class="label">
                제품명
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">입력</span>
            </div>
        </div>
        <div class="box">
            <div class="label">
                제품가격
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">입력</span>
            </div>
        </div>
        <div class="box">
            <div class="label">
                배송비
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">입력</span>
            </div>
        </div>
        <div class="box">
            <div class="label">
                추가배송비(도서산간)
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">입력</span>
            </div>
        </div>
        <div class="box">
            <div class="label">
                제품카테고리
            </div>
            <div class="selectBox">
                <select class="form-select" aria-label="Default select example" style="width:150px; float: left;">
                    <option selected>전자제품</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width:150px; float: left;">
                    <option selected>컴퓨터</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width:150px; float: left;">
                    <option selected>악세사리</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div> 
        <div class="box">
            <div class="label">
                태그
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">입력</span>
            </div>
        </div>
        <div class="box">
            <div class="label">
                출고율
            </div>
            <div class="input-group mb-3" style="width:1000px;">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                <span class="input-group-text" id="basic-addon2">일 이내 출고</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
.title {
    text-align: center;
}
.box {
    width: 1200px;
    margin: 0 auto;
}
.label {
    width: 200px;
    float: left;
    /* border: 1px solid #cccccc; */
}
.selectBox {
    width: 1000px;
}
</style>