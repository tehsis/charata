TRANSFORMS=babelify
NODE=node
BROWSERIFY=$(node) node_modules/browserify/bin/cmd.js
OUTDIR=.
OUT=$(OUTDIR)/index.js

all: build

build: $(OUT)

$(OUT):
	$(BROWSERIFY) src/index.js -t $(TRANSFORMS) --outfile $(OUT)

clean:
	rm -r $(OUT)
