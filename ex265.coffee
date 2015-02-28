animals = 'baboons badgers antelopes cobras crocodile'

answer = for animal in animals.split " "
    collective = switch animal
        when "antelopes" then "herd"
        when "baboons" then "rumpus"
        when "badgers" then "cete"
        when "cobras" then "quiver"
        when "crocodiles" then "baak"
    "A #{collective} of #{animal}"

console.log answer

