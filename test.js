var test = require('ava')
var highlight = require('./index.js')

test('match', function (t) {
  t.is(
    highlight('tqb', 'The quick brown fox'),
    '<strong>T</strong>he <strong>q</strong>uick <strong>b</strong>rown fox'
  )

  t.is(
    highlight('quick', 'The quick brown fox'),
    'The <strong>quick</strong> brown fox'
  )

  t.is(highlight('fox', 'fox'), '<strong>fox</strong>')
  t.is(highlight('ox', 'quick fox'), 'quick f<strong>ox</strong>')

  t.end()
})

test('not match', function (t) {
  t.is(highlight('zzz', 'The quick brown fox'), null)
  t.end()
})

test('specify tag', function (t) {
  t.is(
    highlight('quick', 'The quick brown fox', { tag: 'em' }),
    'The <em>quick</em> brown fox'
  )

  t.end()
})
