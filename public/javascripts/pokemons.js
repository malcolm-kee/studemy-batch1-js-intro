// wrap code in IIFE
function showPokemons(pokemons) {
  console.log({ data: pokemons });

  const pokemonList = document.querySelector('#pokemon-list');

  pokemonList.innerHTML = '';

  pokemons.forEach((pokemon) => {
    const li = document.createElement('li');
    li.className =
      'col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200';

    li.innerHTML = `
        <div class="flex-1 flex flex-col p-8">
        <img
        class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
        src="${pokemon.thumbnail}"
        alt=""
        />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">
        ${pokemon.name.english}
        </h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 text-sm line-clamp-3">${pokemon.description}</dd>
        </dl>
        </div>
        `;

    pokemonList.append(li);
  });
}

// (function () {
//   fetch('/api/pokemons')
//     .then((res) => {
//       console.log('line 37');
//       return res.json();
//     })
//     .then((data) => {
//       showPokemons(data);
//     });

//   console.log('line 43');
// })();

(async function () {
  console.log('48');
  const res = await fetch('/api/pokemons');
  console.log('50');
  const data = await res.json();
  showPokemons(data);
})();

// fetch pokemon list from `/api/pokemons`

// remove the placeholder in #pokemon-list

/* For each pokemon,
1. create a li element with class 'col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
2. the li element should have the following inner HTML:
<div class="flex-1 flex flex-col p-8">
<img
class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
src="${pokemon.thumbnail}"
alt=""
/>
<h3 class="mt-6 text-gray-900 text-sm font-medium">
${pokemon.name.english}
</h3>
<dl class="mt-1 flex-grow flex flex-col justify-between">
<dd class="text-gray-500 text-sm line-clamp-3">${pokemon.description}</dd>
</dl>
</div>
3. append the li element to #pokemon-list
*/
// })();
