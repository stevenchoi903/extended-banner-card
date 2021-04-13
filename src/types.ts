import { ActionConfig, EntityConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'boilerplate-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface BannerCardExtConfig extends LovelaceCardConfig {
  type: string;
  name?: any;
  show_warning?: boolean;
  show_error?: boolean;
  rowSize?: number;
  test_gui?: boolean;
  color?: string;
  entities: BannerCardExtConfigEntityConfig[];
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface BannerCardExtConfigEntityConfig extends EntityConfig {
  domain: any;
  attribute?: any;
  error?: any;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  size?: number;
}
