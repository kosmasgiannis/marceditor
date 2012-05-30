<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:marc="http://www.loc.gov/MARC21/slim"
  exclude-result-prefixes="marc"
  >

<xsl:output method="html" indent="yes"/>

<xsl:template match="marc:record">

  <pre>
  <table>
    <tr><td>LDR</td><td colspan="2"><xsl:value-of select="marc:leader"/></td></tr>
    <xsl:for-each select="marc:controlfield">
      <tr><td><xsl:value-of select="@tag"/></td><td colspan="2"><xsl:value-of select="."/></td></tr>
    </xsl:for-each>
    <xsl:for-each select="marc:datafield">
      <tr>
        <td><xsl:value-of select="@tag"/></td>
        <td><xsl:value-of select="@ind1"/><xsl:value-of select="@ind2"/></td>
        <td>
          <xsl:for-each select="marc:subfield">
            <xsl:choose>
              <xsl:when test="position() = 1">
                <xsl:value-of select="concat('$',@code,' ',.)"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="concat(' $',@code,' ',.)"/>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:for-each>
        </td>
      </tr>
    </xsl:for-each>
  </table>
  </pre>

</xsl:template>

<xsl:template match="*" />

</xsl:stylesheet>
