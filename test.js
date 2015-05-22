var test = require('tape')
var highlight = require('./index.js')

test(function (t) {
  t.equal(
    highlight('tqb', 'The quick brown fox'),
    '<strong>T</strong>he <strong>q</strong>uick <strong>b</strong>rown fox'
  )

  t.equal(
    highlight('quick', 'The quick brown fox'),
    'The <strong>quick</strong> brown fox'
  )

  t.equal(
    highlight('quick', 'The quick brown fox', { tag: 'em' }),
    'The <em>quick</em> brown fox'
  )

  t.end()
})
