var test = require('ava')
var highlight = require('./index.js')

test(function (t) {
  t.is(
    highlight('tqb', 'The quick brown fox'),
    '<strong>T</strong>he <strong>q</strong>uick <strong>b</strong>rown fox'
  )

  t.is(
    highlight('quick', 'The quick brown fox'),
    'The <strong>quick</strong> brown fox'
  )

  t.is(highlight('fox', 'fox'), '<strong>fox</strong>')

  t.is(
    highlight('zzz', 'The quick brown fox'),
    null,
    'it returns null if unmatched'
  )

  t.is(
    highlight('quick', 'The quick brown fox', { tag: 'em' }),
    'The <em>quick</em> brown fox'
  )

  t.end()
})
