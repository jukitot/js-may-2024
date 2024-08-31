// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

function create(tag){
    return document.createElement(`${tag}`)
}

fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(res => {
        let {recipes} = res;
        for (const recipe of recipes) {
            console.log(recipe);
            let {id,
                userId,
                name,
                ingredients,
                instructions,
                prepTimeMinutes,
                caloriesPerServing,
                cookTimeMinutes,
                cuisine,
                difficulty,
                image,
                mealType,
                rating,
                reviewCount,
                servings,
                tags
            } = recipe;
            let mainBlock = document.getElementById('main')

            let blockRecipe = create('div');
            blockRecipe.classList.add('d-flex', 'justify-content-center')

            let blockTextImgRecipe = create('div');
            blockTextImgRecipe.classList.add('blockRecipe', 'card', 'p-2')

            let blockIngredientsRecipe = create('div');
            blockIngredientsRecipe.classList.add('blockIngredients')

            let titleIngredient = create('h3');
            titleIngredient.innerText = 'Ingredients ' + `(for ${servings} servings)`

            let ingredientsList = create('ul');
            ingredientsList.classList.add('list-group', 'ingredientsList')

            for (const item of ingredients) {
                let itemIngredient = create('li')
                itemIngredient.innerText = item;
                itemIngredient.classList.add('list-group-item')
                ingredientsList.append(itemIngredient)
            }

            blockIngredientsRecipe.append(titleIngredient, ingredientsList)

            let titleInstruction = create('h3');
            titleInstruction.innerText = 'How to cook it:'

            let instructionsList = create('ol');

            for (const item of instructions) {
                let itemInstructions = create('li')
                itemInstructions.innerText = item;
                instructionsList.append(itemInstructions)
            }

            blockIngredientsRecipe.append(titleInstruction,instructionsList)

            let idRecipe = create('p')
            idRecipe.classList.add('fs-5')
            idRecipe.innerText = 'Recipe id: ' + id;

            let idUser = create('p');
            idUser.classList.add('fs-5')
            idUser.innerText = 'User id: ' + userId;

            let nameRecipe = create('p')
            nameRecipe.innerText = name;
            nameRecipe.classList.add('fs-2')

            let img = create('img');
            img.src = image;
            img.classList.add('mt-2')

            let PrepTime = create('div');
            PrepTime.innerText = 'Prep time: ' + prepTimeMinutes + ' minutes';
            PrepTime.classList.add('fs-5')

            let calories = create('p')
            calories.innerText = caloriesPerServing + ' calories'
            calories.classList.add('fs-5')

            let cookTime = create('p')
            cookTime.innerText = 'Cook time: ' + cookTimeMinutes + ' minutes'
            cookTime.classList.add('fs-5')

            let cuisineCountry = create('p');
            cuisineCountry.innerText = cuisine
            cuisineCountry.classList.add('text-bg-primary', 'badge', 'w-50', 'm-auto', 'fs-5')

            let difficultyRecipe = create('p');
            difficultyRecipe.innerText = difficulty
            if(difficulty === 'Easy') {
                difficultyRecipe.classList.add('text-bg-success', 'badge', 'w-50', 'm-auto', 'fs-6', 'mt-2')
            }

            if (difficulty === 'Medium'){
                difficultyRecipe.classList.add('text-bg-warning', 'badge', 'w-50', 'm-auto', 'fs-6', 'mt-2')
            }

            let typeOfMealList = create('ul');
            for (const item of mealType) {
                let typeItem = create('li');
                typeItem.classList.add('list-group-item')
                typeItem.innerText = item
                typeOfMealList.append(typeItem)
            }
            typeOfMealList.classList.add('list-group', 'w-50', 'm-auto', 'mt-2')

            let ratingRecipe = create('p')
            ratingRecipe.innerHTML = `&#9733; ` + rating;
            ratingRecipe.classList.add('fs-4', 'badge', 'text-bg-warning', 'mt-3')

            let reviewCounts = create('a')
            reviewCounts.href = '#'
            reviewCounts.innerText = reviewCount + ' reviews'
            reviewCounts.classList.add('link-success', 'fs-5')

            let tagList = create('ul')
            for (const item of tags) {
                let itemTag = create('li');
                itemTag.innerText = item;
                itemTag.classList.add('badge', 'text-bg-secondary','m-1', 'fs-6')
                tagList.append(itemTag)
            }
            tagList.classList.add('m-auto')
            let hr = create('hr')

            blockRecipe.append(blockTextImgRecipe, blockIngredientsRecipe)
            blockTextImgRecipe.append(idRecipe,idUser,nameRecipe, tagList, ratingRecipe,reviewCounts, img, PrepTime, calories, cookTime, cuisineCountry, difficultyRecipe , typeOfMealList)
            mainBlock.append(blockRecipe, hr)

        }
    });