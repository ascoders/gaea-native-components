import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import * as ReactNaitve from 'react-native';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: (string | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}