module.exports = {
    params: {
        designator: 'LED_strip',
        side: 'F',
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'},
        DATA: {type: 'net', value: "DATA"},
    },
    body: p => `
        (module lib:LED_strip (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value RGB (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (fp_text user VCC (at 3 0 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user VCC (at 3 0 ${p.rot}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (pad 1 thru_hole oval (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VCC.str})

        (fp_text user DATA (at 3 2.54 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user DATA (at 3 2.54 ${p.rot}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (pad 2 thru_hole oval (at 0 2.54 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.DATA.str})

        (fp_text user GND (at 3 5.08 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user GND (at 3 5.08 ${p.rot}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (pad 3 thru_hole oval (at 0 5.08 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        )
        `
}
