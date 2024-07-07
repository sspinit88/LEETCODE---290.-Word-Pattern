/*
290. Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

 

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.


Ваша задача - определить, следует ли строка s тому же шаблону, что и pattern.

Вот шаги, которые мы будем следовать:

1. Разделите строку s на слова.
2. Если количество слов в s не равно длине pattern, верните false.
3. Создайте два словаря для отслеживания отображения символов между pattern и словами в s.
4. Пройдите по каждому символу в pattern и каждому слову в s одновременно.
5. Если символ или слово уже присутствует в словаре, проверьте, совпадает ли его отображение с текущим словом или символом. Если нет, верните false.
6. Если символ или слово отсутствует в словаре, добавьте его и установите его отображение на текущее слово или символ.
7. Если вы прошли все символы в pattern и все слова в s и не вернули false, верните true.

Your task is to determine whether the string s follows the same pattern as pattern.

Here are the steps we will follow:

1. Split the string s into words.
2. If the number of words in s is not equal to the length of pattern, return false.
3. Create two dictionaries to track the character mapping between pattern and the words in s.
4. Go through each character in pattern and each word in s simultaneously.
5. If the character or word is already present in the dictionary, check whether its mapping matches the current word or character. If not, return false.
6. If the character or word is not present in the dictionary, add it and set its mapping to the current word or character.
7. If you have gone through all characters in pattern and all words in s and have not returned false, return true.

*/

function wordPattern(pattern, s) {
    // Разделяем строку s на слова
    // Split the string s into words
    let words = s.split(' ');

    // Если количество слов в s не равно длине pattern, возвращаем false
    // If the number of words in s is not equal to the length of pattern, return false
    if (words.length !== pattern.length) return false;

    // Создаем два словаря для отслеживания отображения символов между pattern и словами в s
    // Create two dictionaries to track the character mapping between pattern and the words in s
    let mapPattern = {};
    let mapWords = {};

    // Проходим по каждому символу в pattern и каждому слову в s одновременно
    // Go through each character in pattern and each word in s simultaneously
    for (let i = 0; i < pattern.length; i++) {
        // Если символ или слово уже присутствует в словаре
        // If the character or word is already present in the dictionary
        if (mapPattern[pattern[i]] || mapWords[words[i]]) {
            // Проверяем, совпадает ли его отображение с текущим словом или символом
            // Check whether its mapping matches the current word or character
            if (mapPattern[pattern[i]] !== words[i] || mapWords[words[i]] !== pattern[i]) {
                return false;
            }
        } else {
            // Если символ или слово отсутствует в словаре, добавляем его и устанавливаем его отображение на текущее слово или символ
            // If the character or word is not present in the dictionary, add it and set its mapping to the current word or character
            mapPattern[pattern[i]] = words[i];
            mapWords[words[i]] = pattern[i];
        }
    }

    // Если мы прошли все символы в pattern и все слова в s и не вернули false, возвращаем true
    // If we have gone through all characters in pattern and all words in s and have not returned false, return true
    return true;
}

