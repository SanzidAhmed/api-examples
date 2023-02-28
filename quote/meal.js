const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
    <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                details
            </button>
        </div>
    </div>
    `
    mealsContainer.appendChild(mealDiv);
    })
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}

const loadMealDetail = idMeal => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    document.getElementById('meal-details-modal').innerText = meal.strMeal;
    const modalBody = document.getElementById('meal-body-modal');
    modalBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}"></img>
    <p class = "mt-4"><span class = "fw-bold">Name:</span> ${meal.strMeal}</p>
    <p class = "mt-2"><span class = "fw-bold">Product Id:</span> ${meal.idMeal}</p>
    <p class = "mt-2"><span class = "fw-bold">Category:</span> ${meal.strCategory}</p>
    
    
    
    `
}

loadMeals('chicken');