import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

it('Makes sure it will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });

it('makes shortenTex not cut off extra characters after 100 and add ...', ()=> {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

it('has wordCount correctly count the number of words in a sentence', ()=>{
    expect(wordCount(posts)).toBe(233)
})

it('correctly attachs a users full name to a post from attachUserName', ()=>{
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

it('should remove any post with no matching user', ()=>{
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})