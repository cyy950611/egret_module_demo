/**
 * MathUtil
 */
class MathUtil {

    /**
     * 生成范围随机数
     * @param min 最小值
     * @param max 最大值
     */
    static getRandomNum(min: number, max: number): number {
        let range = max - min;
        let rand = Math.random();
        return min + Math.round(rand * range);
    }

    /**
     * 两点的距离
     * @param fromX 初始X 
     * @param fromY 初始Y
     * @param toX   终点X
     * @param toY   终点Y
     */
    static getDistance(fromX: number, fromY: number, toX: number, toY: number): number{
        let disX: number = fromX - toX;
        let ditY: number = fromY - toY;
        let distance: number = Math.sqrt(Math.pow(disX, 2) + Math.pow(ditY, 2));
        return distance;
    }
    
    /**
     * 弧度装换为角度 
     * @param radian 弧度
     */
    static getAngle(radian: number): number {
        return 180 * radian / Math.PI;
    }

    /**
     * 角度装换为弧度
     * @param angle 角度
     */
    static getRadian(angle: number): number {
        return angle / 180 * Math.PI;
    }

    /**
     * 两点算出角度
     * @param fromX 初始X 
     * @param fromY 初始Y
     * @param toX   终点X
     * @param toY   终点Y
     */
    static angleTwoObj(fromX: number, fromY: number, toX: number, toY: number): number {
        //两个点x,y的值
        let x = fromX - toX;
        let y = fromY - toY;

        //斜边长度
        let hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        //求出弧度
        let cos = x / hypotenuse;
        let radian = Math.acos(cos);
        let angle = 90 - 180 / (Math.PI / radian);
        if (y == 0) {
            angle = 180;
        } else if (x == 0) {
            angle = 0;
        } else if (x > 0) {
            angle = -angle;
        } else if (x < 0) {
            angle = -angle;
        }
        return angle;
    }

     /**
     * 自动补零
     * @param num 数字 
     * @param length 长度
     */
    static PrefixInteger(num: number, length: number) {
        return (Array(length).join('0') + num).slice(-length);
    }
}