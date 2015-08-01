TRANSFORMS=babelify
NODE=node
BROWSERIFY=$(node) node_modules/browserify/bin/cmd.js
OUTDIR=lib
OUT=$(OUTDIR)/index.js

all: build

build: $(OUT)

$(OUT): dst
	$(BROWSERIFY) src/index.js -t $(TRANSFORMS) --outfile $(OUT)

dst:
	mkdir lib 

clean:
	rm -r $(OUTDIR)
