
function getInputText() {

    const input = document.getElementById('search-text');

    const inputText = input.value;

    input.value = null;

    return inputText;
}

const loadMeals = async () => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputText()}`;

    const search = await fetch(url);
    const response = await search.json();
    displayMeal(response);

}

const displayMeal = (data) => {

    const mealArray = data.meals;

    const rowParent = document.getElementById('meal-section');

    rowParent.textContent = '';

    console.log(mealArray);

    if (mealArray == null) {

        document.getElementById('error-msg').style.display = 'block'

    } else {

        document.getElementById('error-msg').style.display = 'none'

        mealArray.forEach(element => {

            const newCol = document.createElement('div');
            newCol.innerHTML = `<div class="col">
            <div class="card">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
            </div>`
            rowParent.appendChild(newCol);
        })
    }
}