module.exports = function highlight (query, text, opts) {
  opts = opts || { tag: 'strong' }

  if (query.length === 0) {
    return text
  }

  var offset = text.toLowerCase().indexOf(query[0].toLowerCase())
  if (offset === -1) return null

  var last = 0
  for (var i = 1; i < query.length; i++) {
    if (text[offset + i] !== query[i]) {
      break
    }

    last = i
  }

  var before = text.slice(0, offset)
  var match = '<' + opts.tag + '>' + text.slice(offset, offset + last + 1) + '</' + opts.tag + '>'
  var after = highlight(query.slice(last + 1), text.slice(offset + last + 1), opts)

  return after === null ? null : before + match + after
}
