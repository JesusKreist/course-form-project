const customerInput = document.getElementById("name");
const course = document.getElementById("course");
const author = document.getElementById("author");
const submitBtn = document.querySelector(".submitBtn");
const courses = document.querySelector(".customer-list");
const loading = document.querySelector(".loading");


const getCourse = (event) => {
    event.preventDefault();
    setTimeout(() => {
        loading.classList.remove("showItem");
        const idx = Math.floor(Math.random() * 6);
        if (customerInput.value && course.value && author.value) {
            let extra = `<div class="col-11 mx-auto col-md-6 my-3 col-lg-4">
      <div class="card text-left">
        <img src="./img/cust-${idx}.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <!-- customer name -->
          <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customerInput.value}</span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
              ${course.value}
            </span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${author.value}</span></h6>
          <!-- end of customer name -->
        </div>
      </div>    
    
    </div>`;
            customerInput.value = "";
            course.value = "";
            author.value = "";
            courses.insertAdjacentHTML("beforeend", extra);
        }
    }, 2000)
    loading.classList.add("showItem");    
};

submitBtn.addEventListener("click", getCourse);