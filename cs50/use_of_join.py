def concat(*args, sep="/"):
    return sep.join(args)
reggy = concat("earth", "mars", "venus")
print(reggy)
shicky = concat("earth", "mars", "venus", sep=".")
print(shicky)