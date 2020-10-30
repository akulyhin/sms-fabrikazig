import './sass/styles.scss';

import refs from './js/refs';

console.dir(refs.templateSelect)


refs.templateSelect.addEventListener('change', () => {
    console.log(refs.templateSelect.value)
    if (refs.templateSelect.value === 'Отправить реквизиты Зоренко') {
        refs.zorenko.classList.remove('is-hidden')
    }

    else {
        refs.zorenko.classList.add('is-hidden')
    }
})