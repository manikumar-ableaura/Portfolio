// tweaks-app.jsx — wires the Tweaks panel into the portfolio
const { useEffect: useEffectT } = React;

const THEME_OPTIONS = [
  { id: 'warm',    label: 'Warm Copper',    swatch: ['#d97757', '#e89b7e', '#1a0e08'] },
  { id: 'indigo',  label: 'Midnight Indigo',swatch: ['#8b6cff', '#b29bff', '#0a0820'] },
  { id: 'sage',    label: 'Forest Sage',    swatch: ['#8fb389', '#b1d0aa', '#0e160c'] },
  { id: 'arctic',  label: 'Arctic Steel',   swatch: ['#6fd0e0', '#9be3ee', '#06141a'] },
  { id: 'plum',    label: 'Plum Rose',      swatch: ['#e88aa0', '#f0aabc', '#1c0810'] },
];

function applyTheme(theme) {
  if (theme === 'warm') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', theme);
}
function applyNameLayout(layout) {
  document.documentElement.setAttribute('data-name-layout', layout);
}

function PortfolioTweaks() {
  const defaults = (window.TWEAK_DEFAULTS) || { theme: 'warm', nameLayout: 'stacked' };
  const [t, setTweak] = useTweaks(defaults);

  // Apply on mount + on any change
  useEffectT(() => { applyTheme(t.theme); }, [t.theme]);
  useEffectT(() => { applyNameLayout(t.nameLayout); }, [t.nameLayout]);

  const themeOption = THEME_OPTIONS.find((o) => o.id === t.theme) || THEME_OPTIONS[0];

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Aesthetic" />
      <div className="twk-row">
        <div className="twk-lbl">
          <span>Palette</span>
          <span className="twk-val">{themeOption.label}</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:6, marginTop:4}}>
          {THEME_OPTIONS.map((opt) => {
            const active = opt.id === t.theme;
            return (
              <button
                key={opt.id}
                title={opt.label}
                onClick={() => setTweak('theme', opt.id)}
                style={{
                  appearance:'none',
                  cursor:'pointer',
                  padding: 0,
                  height: 38,
                  borderRadius: 9,
                  position:'relative',
                  overflow:'hidden',
                  border: active ? '1.5px solid rgba(41,38,27,0.9)' : '0.5px solid rgba(0,0,0,0.12)',
                  boxShadow: active ? '0 0 0 2px rgba(255,255,255,0.6), 0 4px 10px rgba(0,0,0,0.15)' : 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  background: `linear-gradient(135deg, ${opt.swatch[2]} 0%, ${opt.swatch[2]} 45%, ${opt.swatch[0]} 45%, ${opt.swatch[0]} 75%, ${opt.swatch[1]} 75%)`,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              />
            );
          })}
        </div>
      </div>

      <TweakSection label="Hero name" />
      <TweakRadio
        label="Layout"
        value={t.nameLayout}
        options={['stacked', 'single']}
        onChange={(v) => setTweak('nameLayout', v)}
      />
      <div style={{fontSize:10.5, color:'rgba(41,38,27,0.5)', lineHeight:1.45, marginTop:-2}}>
        Stacked carries more editorial weight at full type size. Single-line reads more conventionally.
      </div>
    </TweaksPanel>
  );
}

// Mount the tweaks panel into a separate root so it doesn't conflict with the main app
const tweaksHost = document.createElement('div');
document.body.appendChild(tweaksHost);
ReactDOM.createRoot(tweaksHost).render(<PortfolioTweaks />);
