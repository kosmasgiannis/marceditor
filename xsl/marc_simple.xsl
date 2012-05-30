<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:marc="http://www.loc.gov/MARC21/slim"
  exclude-result-prefixes="marc"
>

<xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>

<xsl:param name="format" select="'marc21'"/>

<xsl:template match="marc:record">
  <marc21_simple>
    <title>
      <xsl:variable name="t">
      <xsl:if test="$format = 'marc21'">
        <xsl:choose>
          <xsl:when test="substring(marc:leader,7,1) != 'z'">
            <xsl:for-each select="marc:datafield[@tag=245]">
              <xsl:for-each select="marc:subfield[contains('abfghk',@code)]">
                <xsl:value-of select="."/>
                <xsl:if test="position() != last()">
                  <xsl:text> </xsl:text>
                </xsl:if>
              </xsl:for-each>
            </xsl:for-each>
          </xsl:when>
          <xsl:otherwise>
            <xsl:for-each select="marc:datafield[starts-with(@tag,'1')]">
              <xsl:for-each select="marc:subfield">
                <xsl:value-of select="."/>
                <xsl:if test="position() != last()">
                  <xsl:text> </xsl:text>
                </xsl:if>
              </xsl:for-each>
            </xsl:for-each>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:if>
      </xsl:variable>
      <xsl:call-template name="chopPunctuation">
        <xsl:with-param name="chopString" select="$t"/>
      </xsl:call-template>
    </title>

    <author>
      <xsl:if test="$format = 'marc21'">
        <xsl:if test="substring(marc:leader,7,1) != 'z'">
          <xsl:for-each select="marc:datafield[@tag=100]|marc:datafield[@tag=110]|marc:datafield[@tag=111]">
            <xsl:for-each select="marc:subfield[contains('abcdnq',@code)]">
              <xsl:value-of select="."/>
              <xsl:if test="position() != last()">
                <xsl:text> </xsl:text>
              </xsl:if>
            </xsl:for-each>
          </xsl:for-each>
        </xsl:if>
      </xsl:if>
    </author>

    <date>
      <xsl:if test="$format = 'marc21'">
        <xsl:if test="substring(marc:leader,7,1) != 'z'">
          <xsl:for-each select="marc:datafield[@tag=260]/marc:subfield[@code='c']">
            <xsl:value-of select="."/>
          </xsl:for-each>
        </xsl:if>
      </xsl:if>
    </date>
  </marc21_simple>

</xsl:template>

<xsl:template match="*" />

<xsl:template name="chopPunctuation">
  <xsl:param name="chopString"/>
  <xsl:param name="punctuation"><xsl:text>.:,;/ </xsl:text></xsl:param>
  <xsl:variable name="length" select="string-length($chopString)"/>
  <xsl:choose>
    <xsl:when test="$length=0"/>
    <xsl:when test="contains($punctuation, substring($chopString,$length,1))">
      <xsl:call-template name="chopPunctuation">
        <xsl:with-param name="chopString" select="substring($chopString,1,$length - 1)"/>
        <xsl:with-param name="punctuation" select="$punctuation"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:when test="not($chopString)"/>
    <xsl:otherwise><xsl:value-of select="$chopString"/></xsl:otherwise>
  </xsl:choose>
</xsl:template>


</xsl:stylesheet>
